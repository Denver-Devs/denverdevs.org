/* eslint-disable comma-dangle */
const axios = require('axios');
const fs = require('fs');

const meetupFile = './static-data/staticMeetups.json';
const meetupURLs = [
  'denver-creative-tech',
  'Denver-Modern-Web',
  'DenverMicroservices',
  'DenverScript',
  'DenverUX',
  'Develop-Happy-Hour',
  'front-range-front-end',
  'JAMstack-Denver',
  'ReactDenver',
  'RockyMountainAngular'
];

const getMeetupGroups = `https://api.meetup.com/2/groups?sign=true&photo-host=public&group_urlname=${meetupURLs}&page=20&key=${process.env.MEETUP_API}`;

axios({
  method: 'get',
  url: getMeetupGroups,
}).then((getMeetupRes) => {
  const meetupIDs = [];
  getMeetupRes.data.results.map(meetup => meetupIDs.push(meetup.id));
  const getGroupEvents = `https://api.meetup.com/2/events?sign=true&photo-host=public&group_id=${meetupIDs}&key=${process.env.MEETUP_API}&time=0d,3m`;
  return axios({
    method: 'get',
    url: getGroupEvents,
  }).then((res) => {
    fs.writeFileSync(meetupFile, JSON.stringify(res.data.results), 'UTF-8');
  })
    .catch((err) => {
      console.log('Error getting stuff', err);
    });
}).catch((err) => {
  console.log('error', err);
});

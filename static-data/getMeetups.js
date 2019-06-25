/* eslint-disable comma-dangle */
const axios = require('axios');
const fs = require('fs');
const chalk = require('chalk');
const meetups = require('./data-sources/meetups.json');

const meetupFile = './static-data/staticMeetups.json';
const getMeetupGroups = `https://api.meetup.com/2/groups?sign=true&photo-host=public&group_urlname=${meetups.join(',')}&page=20&key=${process.env.MEETUP_API}`;

console.log(chalk.cyan('Getting meetups from Meetup'));
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
    console.log(chalk.green(`Success, returned ${res.data.results.length} meetups`));
  })
    .catch((err) => {
      console.log(chalk.red('Error getting stuff', err));
    });
}).catch((err) => {
  console.log(chalk.red('error', err));
});

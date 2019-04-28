

const axios = require('axios');
const fs = require('fs');
const moment = require('moment');
const CircularJSON = require('circular-json');

const ddCalURL = `https://www.googleapis.com/calendar/v3/calendars/denverdevs.org_g5u6nvggnne51qre64lsnm0al4@group.calendar.google.com/events?key=${process.env.GOOGLE_API}`;
const ddMeetupFile = './static-data/staticDDMeetups.json';
const today = moment().format();
const threeMonths = moment(today).add(3, 'M').format();

// exports.handler = (event, context) => {
console.log('Requesting Meetups from Google');
axios({
  method: 'get',
  url: ddCalURL,
  params: {
    singleEvents: true,
    orderBy: 'startTime',
    timeMin: today,
    timeMax: threeMonths,
    maxResults: 9,
  },
}).then((res) => {
  fs.writeFileSync(ddMeetupFile, CircularJSON.stringify(res.data.items), 'UTF-8');
})
  .catch((err) => {
    console.log('Error getting stuff', err);
  });
// };

const axios = require('axios');
const fs = require('fs');
const CircularJSON = require('circular-json');

const conferenceCalURL = `https://www.googleapis.com/calendar/v3/calendars/denverdevs.org_iidscsg1g1em2n467m99d4tc1k@group.calendar.google.com/events?key=${process.env.GOOGLE_API}`;
const conferenceFile = './static-data/staticConferences.json';

// exports.handler = (event, context) => {
console.log('Requesting Conferences from Google');
axios({
  method: 'get',
  url: conferenceCalURL,
}).then((res) => {
  fs.writeFileSync(conferenceFile, CircularJSON.stringify(res.data.items), 'UTF-8');
})
  .catch((err) => {
    console.log('Error getting stuff', err);
  });
// };

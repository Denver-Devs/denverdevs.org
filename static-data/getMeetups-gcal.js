const axios = require('axios');
const fs = require('fs');
const moment = require('moment');
const CircularJSON = require('circular-json');

const meetupFile = './static-data/staticMeetups.json';
const meetupCalIDs = [
  '4m7laeveugld5tnur173d0gbvvmv5cer@import.calendar.google.com', // DD HH
  'u0qojd16pb7ca81g964v1napqic6sjsm@import.calendar.google.com', // React Denver
];

const today = moment().format();
const threeMonths = moment(today).add(3, 'M').format();

// exports.handler = (event, context) => {
console.log('Requesting Calendars from Google');

axios
  .all(meetupCalIDs.map(id => axios({
    method: 'get',
    url: `https://www.googleapis.com/calendar/v3/calendars/${id}/events?key=${process.env.GOOGLE_API}`,
    params: {
      singleEvents: true,
      orderBy: 'startTime',
      timeMin: today,
      timeMax: threeMonths,
    },
  })))
  .then(axios.spread((...res) => {
    const blendedCals = [];
    res.forEach((cal) => {
      cal.data.items.forEach((events) => {
        blendedCals.push(events);
      });
    });

    fs.writeFileSync(meetupFile, CircularJSON.stringify(blendedCals), 'UTF-8');
  })).catch((err) => {
    console.log('Error getting calendars', err);
  });
// };

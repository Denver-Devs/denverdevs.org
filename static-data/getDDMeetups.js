

const axios = require('axios');
const fs = require('fs');
const moment = require('moment');
const CircularJSON = require('circular-json');
const chalk = require('chalk');

const ddCalURL = `https://www.googleapis.com/calendar/v3/calendars/denverdevs.org_g5u6nvggnne51qre64lsnm0al4@group.calendar.google.com/events?key=${process.env.GOOGLE_API}`;
const ddMeetupFile = './static-data/staticDDMeetups.json';
const today = moment().format();
const threeMonths = moment(today).add(3, 'M').format();

console.log(chalk.cyan('Requesting Meetups from Google'));
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
  console.log(chalk.green(`Success, returned ${res.data.items.length} DD meetups`));
})
  .catch((err) => {
    console.log(chalk.red('Error getting stuff', err));
  });

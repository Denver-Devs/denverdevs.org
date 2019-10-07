const axios = require("axios");
const fs = require("fs");
const chalk = require("chalk");
const groups = require("./data-sources/staticMeetupUrls.json");

const meetupFile = "./static-data/staticMeetups.json";

console.log(chalk.cyan("Getting meetups from Meetup"));

async function fetchMeetupEvents() {
  // eslint-disable-next-line arrow-body-style
  const groupUrls = groups.map(group => {
    return axios.get(`https://api.meetup.com/${group}/events?page=3`);
  });
  return await Promise.all(groupUrls.map(p => p.catch(e => e)));
}

const sourceMeetups = async () => {
  const groupResponse = await fetchMeetupEvents(groups);
  const validResults = groupResponse.filter(result => !(result instanceof Error));
  const responseData = validResults.map(res => res.data);
  const mergedData = [].concat(...responseData);

  fs.writeFileSync(meetupFile, JSON.stringify(mergedData), "UTF-8");
  console.log(chalk.green(`Success, returned ${mergedData.length} meetups`));
};
sourceMeetups();

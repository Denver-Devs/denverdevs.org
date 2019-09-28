const axios = require("axios");
const fs = require("fs");
const chalk = require("chalk");
const groups = require("./data-sources/meetups.json");

const meetupFile = "./static-data/staticMeetups.json";

console.log(chalk.cyan("Getting meetups from Meetup"));

async function fetchMeetupEvents() {
  let groupNames = groups.map(group => group.replace(/-/g, ""));
  // eslint-disable-next-line arrow-body-style
  const groupUrls = groups.map(group => {
    return axios.get(`https://api.meetup.com/${group}/events?access_token=${process.env.MEETUP_API}&page=3`);
  });
  return (groupNames = await Promise.all(groupUrls));
}

const sourceMeetups = async () => {
  const groupResponse = await fetchMeetupEvents(groups);
  const responseData = groupResponse.map(res => res.data);
  const mergedData = [].concat(...responseData);
  fs.writeFileSync(meetupFile, JSON.stringify(mergedData), "UTF-8");
};
sourceMeetups();

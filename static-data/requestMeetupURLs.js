/* eslint-disable quotes */
/* eslint-disable arrow-parens */
const fs = require("fs");
const markdownLinkExtractor = require("markdown-link-extractor");
const GithubContent = require("github-content");
const chalk = require("chalk");

const meetups = "./static-data/staticMeetupUrls.json";

const options = {
  owner: "Denver-Devs",
  repo: "common-topics",
  branch: "master"
};

const gc = new GithubContent(options);

console.log(chalk.cyan("Requesting Meetup URLS from DD Repo"));
const GetMeetupMarkdown = () => {
  // eslint-disable-next-line consistent-return

  gc.file("/channels/meetup/what-meetup-should-i-go-to.md", (err, file) => {
    if (err) return console.log(err);
    const links = markdownLinkExtractor(file.contents.toString()).map(meetupUrl => {
      const regex = /https:\/\/www.meetup.com\/(.*)/gm;
      const matches = regex.exec(meetupUrl);
      if (!matches) {
        return null;
      }
      return matches[1].replace("/", "");
    });
    console.log(chalk.green(`Success, returned ${links.length} Meetup URLs`));
    fs.writeFileSync(meetups, JSON.stringify(links), "UTF-8");
  });
};

GetMeetupMarkdown();

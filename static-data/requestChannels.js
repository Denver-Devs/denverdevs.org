
const axios = require('axios');
const fs = require('fs');
const chalk = require('chalk');

const channelLambdaAWS = 'https://fq3vjw2i1k.execute-api.us-east-1.amazonaws.com/dev/channels';


console.log(chalk.cyan('Requesting Channels from Slack'));
axios({
  method: 'get',
  url: channelLambdaAWS,
}).then((res) => {
  fs.writeFileSync('./static-data/staticChannels.json', JSON.stringify(res.data), 'UTF-8');
  console.log(chalk.green(`Success, returned ${res.data.channels.length} channels`));
})
  .catch((err) => {
    console.log(chalk.red('Error getting stuff', err));
  });


const axios = require('axios');
const fs = require('fs');
const channelLambdaAWS = 'https://fq3vjw2i1k.execute-api.us-east-1.amazonaws.com/dev/channels';


exports.handler = function (event, context) {
  console.log('Requesting Channels from Slack');
  axios({
    method: 'get',
    url: channelLambdaAWS,
  }).then((res) => {
    fs.writeFileSync('./data/staticChannels.json', JSON.stringify(res.data), 'UTF-8');
  })
    .catch((err) => {
      console.log('Error getting stuff', err);
    });
}
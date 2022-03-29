exports.handler = async (event) => {
  const AWS = require("aws-sdk");

  let requestParams = JSON.parse(event.body);
  let company = requestParams.company;
  let job_url = requestParams.job_url;
  let tags = requestParams.tags;
  let location_type = requestParams.location_type;
  let location = requestParams.location;
  let title = requestParams.title;
  let user_email = requestParams.user_email;

  AWS.config.update({
    accessKeyId: process.env.DDAWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.DDAWS_SECRET_ACCESS_KEY,
    region: process.env.DDAWS_REGION,
  });

  const ses = new AWS.SES();
  const params = {
    Destination: {
      ToAddresses: ["dan@denverdevs.org"],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<html>
                  <body>
                    <h2>New Job Post for review:</h2>
                    <ul>
                      <li>User: ${user_email}</li>
                      <li>Title: ${title}</li>
                      <li>Company: ${company}</li>
                      <li>Job URL: <a href="${job_url}">${job_url}</a></li>
                      <li>Location: ${location}</li>
                      <li>Location Type: ${location_type}</li>
                      <li>Tags: ${tags}</li>
                    </ul>
                    <a href="${process.env.SUPABASE_REVIEW_URL}">Click here to review jobs in Supabase</a>
                  </body>
              </html>`,
        },
        Text: {
          Charset: "UTF-8",
          Data: "",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "New Job Post Submitted For Review",
      },
    },
    Source: "mail@denverdevs.org",
  };

  return ses
    .sendEmail(params)
    .promise()
    .then((data) => {
      console.log("email submitted to SES", data);
      return {
        statusCode: 200,
        body: `Message sent`,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        statusCode: 500,
        body: `Message unsuccesfully sent, error: ${error}`,
      };
    });
};

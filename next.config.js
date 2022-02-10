const removeImports = require("next-remove-imports")({});

module.exports = removeImports({
  reactStrictMode: true,
  target: "serverless",
  env: {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_HIRING_BASE_ID: process.env.AIRTABLE_HIRING_BASE_ID,
    AIRTABLE_HIRING_TABLE_NAME: process.env.AIRTABLE_HIRING_TABLE_NAME,
    AIRTABLE_LOOKING_BASE_ID: process.env.AIRTABLE_LOOKING_BASE_ID,
    AIRTABLE_LOOKING_TABLE_NAME: process.env.AIRTABLE_LOOKING_TABLE_NAME,
  },
  images: {
    domains: ["tjkozhkscieinulujbed.supabase.co"],
  },
});

var Airtable = require("airtable");

var hiringBase = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_HIRING_BASE_ID);
var lookingBase = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_LOOKING_BASE_ID);

const hiringTable = hiringBase(process.env.AIRTABLE_HIRING_TABLE_NAME);
const lookingTable = lookingBase(process.env.AIRTABLE_LOOKING_TABLE_NAME);

module.exports = { hiringTable, lookingTable };

const { hiringTable } = require("../utils/helpers/airtable");
const formattedReturn = require("./helpers/formattedReturn");

exports.handler = async (event) => {
  const fields = JSON.parse(event.body);
  try {
    const createdListing = await hiringTable.create([{ fields }]);
    return formattedReturn(200, createdListing);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
};

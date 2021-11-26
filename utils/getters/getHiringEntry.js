import { hiringTable } from "../helpers/airtable";

export default function getHiringEntry(id) {
  let hiringEntry = {};
  return new Promise((resolve, reject) => {
    hiringTable.find(id, function (err, record) {
      if (err) {
        console.error(err);
        reject(err);
      }
      let hiringEntry = { id, fields: { ...record.fields } };
      resolve(hiringEntry);
    });
  });
}

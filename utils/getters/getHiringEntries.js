import { hiringTable } from "../helpers/airtable";

export default function getHiringEntries() {
  const hiringEntries = [];
  return new Promise((resolve, reject) => {
    hiringTable
      .select({
        view: "Grid view",
        fields: [
          "approved",
          "companyLogo",
          "companyName",
          "contactSharingPermissions",
          "description",
          "url",
          "location",
          "compensation",
          "submitDate",
          "tags",
          "title",
          "userEmail",
          "userID",
          "userName",
          "userSlackHandle",
        ],
        sort: [{ field: "submitDate", direction: "desc" }],
      })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach((record) => {
            const { id, fields } = record;
            if (record.fields.approved === true) {
              hiringEntries.push({
                id,
                ...fields,
              });
            }
          });

          fetchNextPage();
        },
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(hiringEntries);
          }
        }
      );
  });
}

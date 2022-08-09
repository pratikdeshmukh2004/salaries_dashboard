/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const csv = require("csvtojson");
const path = require("path");
exports.seed = async function (knex) {
  // Deletes ALL existing entries

  const csvFilePath = path.join(__dirname, "..", "/data/salary_data.csv");
  return await csv()
    .fromFile(csvFilePath)
    .then(async (jsonObj) => {
      for (let item of jsonObj.slice(0, 20)) {
        let values = Object.values(item);
        await knex("salaries")
          .insert([
            {
              date: new Date(values[0]),
              ages: values[1],
              industry: values[2],
              job_title: values[3],
              anual_salary: values[4],
              currency: values[5],
              location: values[6],
              experience: values[7],
              additional_context: values[8],
            },
          ])
          .then((data) => {
            console.log("data inserted!", data.rowCount);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      return;
    });
};

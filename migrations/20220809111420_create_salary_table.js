/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("salaries", function (table) {
    table.increments("id");
    table.date("date").notNullable();
    table.string("ages");
    table.string("industry");
    table.string("job_title");
    table.string("anual_salary");
    table.string("currency");
    table.text("location");
    table.string("experience");
    table.text("additional_context");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("salaries");
};

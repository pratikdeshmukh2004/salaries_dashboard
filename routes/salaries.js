const express = require("express");
const salaries = require("../controllers/salaries");
const route = express.Router();

route.get("/", salaries.list_salaries);

route.get("/:id", salaries.get_salary);

module.exports = route;

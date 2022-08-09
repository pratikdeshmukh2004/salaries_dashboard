const knex = require("../database/config");

const list_salaries = (req, res) => {
  const params = req.query;
  var filters = ["industry", "currency", "search", "sort", "order", "location"];
  if (
    Object.keys(params).filter((item) => !filters.includes(item)).length > 0
  ) {
    res.send({
      status: "error",
      message: "invalid filters...",
      avalilable_filters: filters.join(", "),
    });
  }
  var sort_field = "date";
  if (Object.keys(params).includes("sort")) {
    sort_field = params.sort;
    delete params["sort"];
  }
  var location = "";
  if (Object.keys(params).includes("location")) {
    location = params.location;
    delete params["location"];
  }
  var order = "asc"
  if (Object.keys(params).includes("order")) {
    order = params.order;
    delete params["order"];
  }
  console.log(sort_field);
  knex("salaries")
    .where(params)
    .orderBy(sort_field, order)
    .where("location", "like", `%${location}%`)
    .then((data) => {
      return res.send({ count: data.length, data: data, status: "success" });
    })
    .catch((err) => {
      res.send({ status: "error", message: err.hint });
    });
};

const get_salary = (req, res) => {
  const id = req.params.id;
  return id
    ? knex("salaries")
        .where({ id })
        .then((data) => {
          data.length
            ? res.send({ data: data, status: "success" })
            : res.send({ status: "error", message: "invalid id..." });
        })
    : res.send({ status: "error", message: "invalid id..." });
};

module.exports = { list_salaries, get_salary };

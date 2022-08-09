const express = require("express");
const app = express();
const knex = require("./database/config");
const salaries_route = require("./routes/salaries");

app.use(express.json());
app.use("/salaries", salaries_route);

app.get("/", (req, res) => {
  res.send({ status: "success" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Your app is listening on http://localhost:${port}`);
});

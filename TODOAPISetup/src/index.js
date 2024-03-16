const express = require("express");
const apirouter = require("./routes");
const { PORT } = require("./config/server.config");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());

app.use("/api", apirouter); // localhost:3000/api/v1/ping

app.listen(PORT, () => {
  console.log(`Started server at port: ${PORT}`);
});

/**
 * How will you manage these kind of routes using express router ?
 *
 * localhost:3000/api/v1/products/3
 * localhost:3000/api/v1/categories/3
 * localhost:3000/api/v2/products/2
 *
 */

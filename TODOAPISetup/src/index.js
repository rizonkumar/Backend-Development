const express = require("express");
const router = require("./routes");
const customRouter = require("./routes/customrouter");
const { PORT } = require("./config/server.config");

const app = express();

app.use("/api", router); // localhost:3000/api/home
app.use("/custom", customRouter); // localhost:3000/custom

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

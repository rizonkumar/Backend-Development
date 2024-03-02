const express = require("express");
const bodyParser = require("body-parser");

// when we call the function express we create a new express server object

const app = express(); // http server object

const PORT = 3000;

app.use(bodyParser.json()); // in json format
app.use(bodyParser.text()); // in text format

// express middleware
function m1(req, res, next) {
  console.log(` Inside middleware m1`);
  //   return res.json({ msg: "not ok" });
  //   m2(req, res);
  console.log(`Req.user insider m1`, req.user); // undefined
  req.user = { id: 1, email: "s@s.com" };
  next();
}

function m2(req, res, next) {
  console.log(` Inside middleware m2`);
  console.log(`Req.user insider m2`, req.user); // { id: 1, email: 's@s.com'
  next();
}

app.get("/home", m1, m2, (req, res) => {
  // everytime someone calls the /home route, this callback will be called
  console.log("/home called");
  console.log(req.url, req.query);

  return res.json({ msg: "ok" }); // here we are passing a js object
});

app.get("/products/:id", (req, res) => {
  // :id part is variable & products is static
  // :id part is your URL params & overall these kind of routes are called as dynamic routes
  console.log(req.params);
  const pid = req.params.id;
  return res.json({ productId: pid });
});

app.post("/data", (req, res) => {
  console.log(req.body); // undefined because req.body has many format so you need to mention
  // to do that you need a middleware (body.parse) because every request going to have request body
  // we use app.use -> to register for all the routes
  //   now if you do
  console.log(req.body); // {email: 's@s.com', password: 12345}
  return res.json({ msg: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

// how can the client send custom data to the server
/**
 * 1. URL Params -> /products/7
 * 2. Query Params -> ?key1=value&key2=value2&key3=value3
 * 3. Request Body ->
 */

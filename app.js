const express = require("express");
const app = express();
const port = 3000;
const debug = require("debug")("app");
const morgan = require("morgan");

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello Fah");
});

app.listen(port, () => {
  debug(`Server is running on port ${port}`);
});

const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const debug = require("debug")("app");
app.use(express.static(path.join(__dirname, "/public/")));
app.get("/", (req, res) => {
  res.send("Hello Fah");
});

app.listen(port, () => {
  debug(`Server is running on port ${port}`);
});

const express = require("express");

let chalk;
import("chalk")
  .then((module) => {
    chalk = module.default;

    const app = express();
    const port = 3000;

    app.get("/", (req, res) => {
      res.send("Hello Fah");
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${chalk.green(": ", port)}`);
    });
  })
  .catch((err) => {
    console.error("Error occurred while importing chalk:", err);
  });

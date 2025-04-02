const path = require('path');
const express = require('express');

const rootDir = require('../utils/pathUtil');

const homeRouter = express.Router();

homeRouter.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "Home.html"));
})

module.exports = homeRouter;
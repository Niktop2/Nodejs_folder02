//core module
const path = require('path');

const express = require('express');
const userRouter = express.Router();

const rootDir = require('../utils/pathUtil');

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "Home.html"));
})

module.exports = userRouter;
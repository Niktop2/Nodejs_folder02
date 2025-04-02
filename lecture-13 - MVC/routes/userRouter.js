//core module
const path = require('path');

const express = require('express');
const userRouter = express.Router();

// const rootDir = require('../utils/pathUtil');
const homesController = require('../controllers/homes');

userRouter.get("/", homesController.getHomes)

module.exports = userRouter;                   
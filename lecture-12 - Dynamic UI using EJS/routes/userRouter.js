//core module
const path = require('path');

//exterqnal module
const express = require('express');
const userRouter = express.Router();

//local module
// const rootDir = require('../utils/pathUtil');
const { registeredHomes } = require('./hostRouter');

userRouter.get("/", (req, res, next) => {

  console.log(registeredHomes);
  
  res.render("home", {registeredHomes: registeredHomes, pageTitle: "airbnb Home"});
})

module.exports = userRouter;
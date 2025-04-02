const path = require('path');
const rootDir = require('../utils/pathUtil');
// const express = require('express');
const Home = require('../models/home');
// const { register } = require('module');


exports.getAddHome = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "host/addHome.html"));
  }


 exports.postAddHome = (req, res, next) => {
    //console.log("Home Registration successful for:",req.body);

    const {homeName, price, location, rating} = req.body

    const home = new Home(homeName, price, location, rating);
    home.save();

    res.sendFile(path.join(rootDir, "views", "host/homeAdded.html"));  
  }


  exports.getHomes = (req, res, next) => {
    Home.fetchAll(registeredHomes => res.render("home", {registeredHomes: registeredHomes, pageTitle: "airbnb Home"}));

    //console.log(registeredHomes);
   }

  // exports.registeredHomes = registeredHomes;
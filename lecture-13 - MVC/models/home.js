const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');
// const { register } = require('module');

//fake database
// let registeredHomes = [];

module.exports = class Home {
  constructor(homeName, price, location, rating) {
    this.homeName = homeName;
    this.price = price;
    this.location = location;
    this.rating = rating;
  }

  save() {
    Home.fetchAll(registeredHomes => {
      registeredHomes.push(this);

      const homeDataPath = path.join(rootDir, "data", "homes.json");

      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Writing Conclude",error);
      });
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    
    fs.readFile(homeDataPath, (error, data) => {
      if (!error) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }
}
//Core Module
//const http = require('http')

//External Module
const express = require('express');

//Local Module
//const testingSyntax =  require('./syntax')

const app = express();

//middleware
app.use("/", (req, res, next) => {     
  console.log("Came in first middleware", req.url, req.method);
  // res.send("<h1>Jai shree krishna!!!</h1>")
  next();
})
app.use("/submit-details", (req, res, next) => {
  console.log("Came in second middleware", req.url, req.method);
  res.send("<h1>Jai shree ram!!!</h1>")
})

//const server =  http.createServer(app);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

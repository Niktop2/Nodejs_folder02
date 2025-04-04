const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log("First Dummy Middleware", req.url, req.method);
  next();
})
app.use((req, res, next) => {
  console.log("Second Dummy Middleware", req.url, req.method);
  next();
})
// app.use((req, res, next) => {
//   console.log("Third Dummy Middleware", req.url, req.method);
//   res.send("<h1>Har Har Mahadev</h1>")
  
// })

app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send("<h1>Jai Shree Ram</h1>")
})

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(`
    <h1>Please give your details here</h1>
    <form action="/contact-us" method="POST"> 
      <input type="text" name="username" placeholder="Enter your Name">
      <input type="email" name="email" placeholder="Enter your Email">
      <input type="submit" value="Submit">  
    </form>
    `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method);
  res.send("<h1>Thanks for your details</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
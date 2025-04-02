// //first code

// const http = require('http');

// function requestListener(req, res) {
//   console.log(req.url, req.method, req.headers);
//  // process.exit();
// }
// const server = http.createServer(requestListener); 

// // OR
// // http.createServer((req, res) => {
// //   console.log(req);
// // });

// // server.listen(3000);
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// })

//=================================================


//second code

// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers);
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<html>');
//   res.write('<head><title>My First Page</title></head>');
//   res.write('<body><h1>Welcome to Home</h1></body>');
//   res.write('</html>');
//   res.end();
//   // return res.end();
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running on port${PORT}`);
// });


//=================================================

//third code

const http = require('http');
                     
function requestListener(req, res) {
  //console.log(req);
  //process.exit();
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Welcome to Home</h1></body>');
    res.write('</html>');
    res.end();
    // return res.end();
  }
  else if (req.url === '/products') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Checkout our products</h1></body>');
    res.write('</html>');
    res.end();
    // return res.end();
  }
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Page not found</h1></body>');
    res.write('</html>');
    res.end();
  }     
}

const server = http.createServer(requestListener);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port${PORT}`);
});

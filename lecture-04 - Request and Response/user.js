const http = require('http');
const fs = require('fs');

function requestListener(req, res) {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');

    res.write('<form action="/submit-details" method="POST" >');

    res.write('<input type="text" name="username" placeholder="Enter your Name"><br>');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male  name="gender" value="male"/>');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female  name="gender" value="female"/>');
    res.write('<br><input type="submit" value="Submit">');

    res.write('</form >');
    res.write('</body>');
    res.write('</html>');
    // res.end();
    return res.end();
  } 

  else if (req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {
      fs.writeFileSync('user1.txt', 'Nikhil Sunil Topre');
      res.statusCode = 302;
      res.setHeader('Location', '/');
      res.end();
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



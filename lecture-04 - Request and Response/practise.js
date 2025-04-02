const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/home") {
    res.write("<h1>welcome to Home</h1>");
    return res.end();
  } else if (req.url === "/men") {
    res.write("<h1>welcome to Men</h1>");
    return res.end();
  } else if (req.url === "/women") {
    res.write("<h1>welcome to Women</h1>");
    return res.end();
  } else if (req.url === "/kids") {
    res.write("<h1>welcome to Kids</h1>");
    return res.end();
  } else if (req.url === "/cart") {
    res.write("<h1>welcome to Cart</h1>");
    return res.end();
  }

  res.write(`
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Myntra</title>
    </head>
    <body>
      <head>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </nav>
      </head>
    </body>
    </html>
    `);
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://127.0.0.1:3000/");
});

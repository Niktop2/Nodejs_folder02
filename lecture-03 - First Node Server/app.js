//first code
const http = require('http');

function requestListener(req, res) {
  //console.log(req.url)
  console.log(req.url, req.method, req.headers);
}
const server = http.createServer(requestListener); 

// OR
// http.createServer((req, res) => {
//   console.log(req);
// });

// server.listen(3000);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})

//=================================================




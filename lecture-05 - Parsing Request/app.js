const http = require('http');   //First Line
const requestListener = require('./user')

const server = http.createServer(requestListener);  //Second Line

const PORT = 3000;               //Third Line
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});


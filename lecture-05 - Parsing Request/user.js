const fs = require("fs");               //First LIne

function requestListener(req, res) {    //Second Line
  console.log(req.url, req.method);

  if (req.url === "/") {  
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Enter Your Details:</h1>");
    res.write('<form action="/submit-details" method="POST" >');

    res.write(
      '<input type="text" name="username" placeholder="Enter your Name"><br>'
    );
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male"  name="gender" value="male"/>');
    res.write('<label for="female">Female</label>');
    res.write(
      '<input type="radio" id="female"  name="gender" value="female"/>'
    );
    res.write('<br><input type="submit" value="Submit">');

    res.write("</form >");
    res.write("</body>");
    res.write("</html>");
    // res.end();
    return res.end();

  } 
  
  else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {

    const body = [];  //reading chunks
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {  //Buffering chunks
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);

      const params = new URLSearchParams(parsedBody); //parsing request

      // const bodyObject = {};
      // for (const [key, value] of params.entries()) {
      //   bodyObject[key] = value;
      // }

      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);

      fs.writeFileSync("user1.txt", JSON.stringify(bodyObject));

    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Page not found</h1></body>");
    res.write("</html>");
    res.end();
  }
}

module.exports = requestListener;       //Third Line

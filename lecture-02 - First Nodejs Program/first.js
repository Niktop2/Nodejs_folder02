const fs = require('fs');
 
fs.writeFile("output1.txt", "Writing Second File", (err) => {
  if (err) console.log('Error occurred');
  else console.log('File written successfully');
})
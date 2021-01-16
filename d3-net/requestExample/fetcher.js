const request = require('request');
const fs = require('fs');

const writeToFile = function(content, fileName){
 fs.writeFile(fileName, content, function (err){
   if (err) {
     throw err;
   }
   const fileSize = fs.statSync(fileName).size;
   console.log(`Downloaded and saved ${fileSize} bytes to ${fileName}`)
 });
}
const newFun = function(url, filename, callback) {
  request(url, (error, response, body) => {    
    callback(body,filename); // Print the HTML for the Google homepage.
  });
}
newFun(process.argv[2], process.argv[3],writeToFile);
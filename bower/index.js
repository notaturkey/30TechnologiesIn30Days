var http = require('http');
var fs = require("fs");

console.log("start");

http.createServer(function(request, response) {
console.log(request.url);
fs.readFile("index.html", function(err, data){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(data);
  response.end();
});
}).listen(3000);

console.log(`Example app listening at http://localhost:3000`)

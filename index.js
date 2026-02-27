const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url}: New request received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        res.end("I am Tanzeela");
        break;
      default:
        res.end("404 not found");
    }
    console.log("New request received");
  });
});
myServer.listen(9000, () => {
  console.log("Server started");
});
//
//Implement basic URL routing using switch case

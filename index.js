const http = require("http");
const fs = require("fs"); //Creating a webServer using fs module i.e make log of incoming requests
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}:${req.url}:New Req Received\n`; //check path of http requests
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
  });
});
myServer.listen(8000, () => {
  console.log("Server started");
});

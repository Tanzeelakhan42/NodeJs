const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: New request received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    console.log("New request received");
    res.end("Hello from server");
  });
});
myServer.listen(9000, () => {
  console.log("Server started");
});

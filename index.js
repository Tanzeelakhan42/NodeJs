const http = require("http");
const myServer = http.createServer((req, res) => {
  console.log("New request received");
  res.end("Hello from server");
});

const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  const log = `${Date.now()}: ${req.method}: ${req.url}: New request received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        if (req.method === "GET") res.end("HomePage");
        break;
      case "/about":
        const userName = myUrl.query.myname;
        res.end(`Hello from ${userName}`);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end(`Here are your results for ${search}`);
        break;
      case "/singup":
        if (req.method === "GET") return res.end("This is a  form");
        else if (req.method === "POST") {
          //DB query
          res.end("Success");
        }
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

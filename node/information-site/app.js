const http = require("http");
const fs = require("fs/promises");

async function getPage(path) {
  try {
    const page = await fs.readFile(path, "utf8");
    return page;
  } catch (err) {
    console.log("error: ", err);
  }
}
const PORT = 8080;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    getPage("./index.html").then((page) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(page);
      res.end();
    });
  } else if (req.url === "/about") {
    getPage("./about.html").then((page) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(page);
      res.end();
    });
  } else if (req.url === "/contact-me") {
    getPage("./contact-me.html").then((page) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(page);
      res.end();
    });
  }
});

server.listen(PORT);

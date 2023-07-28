const http = require("http");
const PORT = 3001;

const router = (req, res) => {
  console.log("url", req.url);

  switch (req.url) {
    case "/hola":
      res.writeHead(201, {
        "Content-type": "text/html",
      });
      res.write("aloja world");
      res.end();
      break;

    default:
      res.write("404: I don't known what do you want!");
      res.end()
      break;
  }
};

http.createServer(router).listen(PORT);

console.log(`server is listening on port ${PORT}`);

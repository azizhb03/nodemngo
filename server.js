const dotenv = require("dotenv");
const http = require("http");
dotenv.config();

const connect = require("./database");
const testCrtl = require("./Controles/test.controllers");

const server = http.createServer(async (req, res) => {
  try {
    let data;

    await connect();
    if (req.url === "/products" && req.method === "GET") {
      await testCrtl.getAll(req, res);


    } else if (req.url === "/new" && req.method === "POST") {
      await testCrtl.CreateProduct(req, res);
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    console.error(error);
    res.end(
      JSON.stringify({
        message: "server error ",
      })
    );
  }
});

server.listen(4000, () => {
  console.log("listening on 4000");
});

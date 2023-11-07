const Test = require("../Models/Test.model");

// async function getAll(req, res) {
//   try {
//     const data = await Test.find({});

//     res.writeHead(200,)
//   } catch (err) {
//     res.writeHead(500, err);
//     res.end()
//   }
// }
async function getAll(req, res) {
  const data = await Test.find({});
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

async function CreateProduct(req, res) {
  let body = "";

  let response;
  req.on("data", (chunk) => {
    body += chunk;
  });
  response = await req.on("end", async () => {
    const data = JSON.parse(body);

    const result = await Test.create(data);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(result));
  });
}

module.exports = {
  getAll,
  CreateProduct,
};

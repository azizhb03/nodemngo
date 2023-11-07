const mongoose = require("mongoose");
async function connect_to_db() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("mongodb connetect at : ", connection.connection.host);
  } catch (error) {
    console.log(error);
  }
}
module.exports =  connect_to_db
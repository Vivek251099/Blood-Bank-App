const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected To MongoDb Database ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`MongoDb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDb;

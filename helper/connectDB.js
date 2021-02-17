const mongoose = require("mongoose");
require("dotenv/config");

const connectDB = () => {
  mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true ,useNewUrlParser: true},
    (err) => {
      if (err) {
        throw err;
      }
      console.log("connected to DB");
    }
  );
};

module.exports = connectDB;

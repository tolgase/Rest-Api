const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fname: { type: String, required: true },
  lname: String,
  age: Number,
  created_at: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("user", UserSchema);

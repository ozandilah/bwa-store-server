const mongoose = require("mongoose");
const { urlDB } = require("../config");

mongoose
  .connect(urlDB)
  .then(() => console.log("connected"))
  .catch((e) => console.log(e));

const db = mongoose.connection;

module.exports = db;

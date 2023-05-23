const mongoose = require("mongoose");
let userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Email Harus Di Isi"],
    },
    name: {
      type: String,
      require: [true, "Nama Harus Di Isi"],
    },
    password: {
      type: String,
      require: [true, "Kata Sandi Harus Di Isi"],
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "admin",
    },
    phoneNumber: {
      type: String,
      require: [true, "Nomor Telepon ini Harus Di Isi"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

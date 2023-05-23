const mongoose = require("mongoose");
let playerSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Email Harus Di Isi"],
    },
    name: {
      type: String,
      require: [true, "Nama Harus Di Isi"],
      maxlength: [225, "Panjang Nama Harus Antara 3-225 Karakter"],
      minlength: [3, "Panjang Nama Harus Antara 3-225 Karakter"],
    },
    username: {
      type: String,
      require: [true, "Username Harus Di Isi"],
      maxlength: [225, "Panjang Username Harus Antara 3-225 Karakter"],
      minlength: [3, "Panjang Username Harus Antara 3-225 Karakter"],
    },
    password: {
      type: String,
      require: [true, "Kata Sandi Harus Di Isi"],
      maxlength: [225, "Panjang Password Maximal 225 Karakter"],
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    avatar: {
      type: String,
    },
    fileName: {
      type: String,
    },
    phoneNumber: {
      type: String,
      require: [true, "Nomor Telepon ini Harus Di Isi"],

      maxlength: [13, "Nomor Telepon  Harus Antara 9-13 Karakter"],
      minlength: [9, "Nomor Telepon  Harus Antara 9-13 Karakter"],
    },
    favorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", playerSchema);

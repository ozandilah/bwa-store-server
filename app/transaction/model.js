const mongoose = require("mongoose");
let transactionSchema = mongoose.Schema(
  {
    historyVoucherTopup: {
      gameName: {
        type: String,
        require: [true, "Name Game Harus Di Isi"],
      },
      category: {
        type: String,
        require: [true, "Kategori  Harus Di Isi"],
      },
      thumbnail: {
        type: String,
      },
      coinName: {
        type: String,
        require: [true, "Nama Koin  Harus Di Isi"],
      },
      coinQuantity: {
        type: String,
        require: [true, "Jumlah Koin  Harus Di Isi"],
      },
      price: {
        type: Number,
      },
    },
    historyPayment: {
      name: {
        type: String,
        require: [true, "Nama  Harus Di Isi"],
      },
      type: {
        type: String,
        require: [true, "Tipe Pembayaran  Harus Di Isi"],
      },
      bankName: {
        type: String,
        require: [true, "Nama Bank  Harus Di Isi"],
      },
      noRekening: {
        type: String,
        require: [true, "Nomor Rekening  Harus Di Isi"],
      },
    },
    name: {
      type: String,
      require: [true, "Nama  Harus Di Isi"],
      maxlength: [225, "Panjang Nama Harus Antara 3-225 Karakter"],
      minlength: [3, "Panjang Nama Harus Antara 3-225 Karakter"],
    },
    accountUser: {
      type: String,
      require: [true, "Nama Akun  Harus Di Isi"],
      maxlength: [225, "Panjang Nama Harus Antara 3-225 Karakter"],
      minlength: [3, "Panjang Nama Harus Antara 3-225 Karakter"],
    },

    tax: {
      type: Number,
      default: 0,
    },
    value: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["pending", "failed", "success"],
      default: "pending",
    },
    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
    historyUser: {
      name: { type: String, require: [true, "Name Player Harus Di Isi"] },
      phoneNumber: {
        type: Number,
        require: [true, "Nama Akun  Harus Di Isi"],
        maxlength: [13, "Panjang Nama Harus Antara 9-13 Karakter"],
        minlength: [9, "Panjang Nama Harus Antara 9-13 Karakter"],
      },
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);

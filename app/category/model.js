const mongoose = require("mongoose");
let categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Nama Kategori Harus Di Isi!"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);

const mongoose = require("mongoose");

const PdfSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  pdf: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("PdfDetails", PdfSchema);


const PdfSchema = require("../models/PDF");
const multer = require("multer");
const path = require('path');
const fs = require('fs');

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const uploadFile = upload.single("file");

const uploadPDF = async (req, res) => {
  console.log(req.file);
  const title = req.body.title;
  const fileName = req.file.filename;
  try {
    await PdfSchema.create({ title: title, pdf: fileName });
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
};

const getPDFs = async (req, res) => {
  try {
    const data = await PdfSchema.find({});
    res.send({ status: "ok", data: data });
  } catch (error) {
    res.json({ status: error });
  }
};

module.exports = {
  uploadFile,
  uploadPDF,
  getPDFs,
};

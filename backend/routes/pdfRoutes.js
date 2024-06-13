const express = require("express");
const router = express.Router();
const { uploadFile, uploadPDF, getPDFs } = require("../controllers/pdfController");

router.post("/upload-files", uploadFile, uploadPDF);
router.get("/get-files", getPDFs);

module.exports = router;




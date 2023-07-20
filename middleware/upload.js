const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueFilename = uuidv4()
    let ext = path.extname(file.originalname);
    cb(null, uniqueFilename + ext);
    // cb(null, uniqueFilename + "-" + Date.now() + ext);
  }
});

const upload = multer({
  storage: storage,
});

module.exports = upload;

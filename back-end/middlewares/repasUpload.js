// multerMiddleware.js
const { uuid } = require('uuidv4');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../front-end/img/repas'); // Define the destination folder for storing uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, uuid() + "-" + Date.now() + path.extname(file.originalname)); // Keep the original file name
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
  fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|webp|svg|avif)$/)) {
      return cb(new Error("Please upload a valid image file"));
    }
    cb(null, true);
  },
});

module.exports = upload;

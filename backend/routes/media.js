const express = require("express");
const mediaController = require("../controller/mediaController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function ( cb) {
    cb(null, "./public");
  },
  filename: function ( file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage
});

const router = express.Router();

//get all media
router.get("/all", mediaController.getAll);

//post create new media
router.post("/create",upload.fields([
    {
        name:"videos",
        maxCount:5,

    }
]), mediaController.create);

module.exports = router;

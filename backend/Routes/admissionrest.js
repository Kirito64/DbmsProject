const router = require("express").Router();
const multer = require("multer");
const storage = require("../configs/multer");
const db = require("../configs/db").sequelize;
var upload = multer({ storage: storage });

router.post(
  "/new",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "sign", maxCount: 1 },
  ]),
  (req, res) => {
    console.log(req.body);
    const addmission = req.body.body;

    const newAdmission = db.models.Admission.build(addmission);

    newAdmission.photo = `${req.files["photo"].destination}/${req.files["photo"].filename}`;
    newAdmission.sign = `${req.files["sign"].destination}/${req.files["sign"].filename}`;
    newAdmission.save();
    res.json(newAdmission.toJSON()).send();
  }
);

module.exports = router;

const router = require("express").Router();
const multer = require("multer");
const storage = require("../configs/multer");
const db = require("../configs/db").sequelize;
console.log(db.models);
var upload = multer({ storage: storage });

router.post("/new", async (req, res) => {
  console.log(req.body);
  const data = req.body;
  const newadmission = await db.models.admission.build({
    JEER: data.JEER,
    DOR: new Date(),
    uploaded: data.uploaded,
  });

  newadmission.save();

  const newaddper = await db.models.addressPerm
    .build({
      pAdd: data.pAdd,
      pCity: data.pCity,
      pState: data.pState,
      pPin: data.pPin,
      pMob: data.pMob,
      admissionJEER: data.JEER,
    })
    .save();

  const newaddCurr = await db.models.addressCurr
    .build({
      cAdd: data.cAdd,
      cCity: data.cCity,
      cState: data.cState,
      cPin: data.cPin,
      cMob: data.cMob,
      admissionJEER: data.JEER,
    })
    .save();

  const newStudentPayment = await db.models.studentPayment
    .build({
      JoDD: data.JoDD,
      InDD: data.InDD,
      admissionJEER: data.JEER,
    })
    .save();

  console.log(newStudentPayment);
  const newddDetailJo = await db.models.ddDetail
    .build({
      DD_NO: data.JoDD,
      DD_Date: data.JoDate,
      DD_Amount: data.JoAmount,
      studentPaymentId: newStudentPayment.id,
    })
    .save();

  const newddDetialIn = await db.models.ddDetail
    .build({
      DD_NO: data.InDD,
      DD_Date: data.InDate,
      DD_Amount: data.InAmount,
      studentPaymentId: newStudentPayment.id,
    })
    .save();

  const newJee = await db.models.jeeMainDetails
    .build({
      JEEAR: data.JEEAR,
      JEESA: data.JEESA,
      JEESM: data.JEESM,
      JEESS: data.JEESS,
      JEESY: data.JEESY,
      AlloctCat: data.AlloctCat,
      CandCat: data.CandCat,
      admissionJEER: data.JEER,
    })
    .save();

  const newhscDetails = await db.models.HSCDetail.build({
    hscb: data.hscb,
    hscs: data.hscs,
    hscy: data.hscy,
    hscm: data.hscm,
    hscp: data.hscp,
    admissionJEER: data.JEER,
  }).save();

  const newSSCdetails = await db.models.SSCDetail.build({
    sscb: data.sscb,
    sscs: data.sscs,
    sscy: data.sscy,
    sscm: data.sscm,
    sscp: data.sscp,
    admissionJEER: data.JEER,
  }).save();

  const registrationDetails = await db.models.registrationDetails
    .build({
      name: data.name,
      photo: data.photo,
      gender: data.gender,
      bloodGroup: data.bloodGroup,
      DOB: data.DOB,
      Mob1: data.Mob1,
      Mob2: data.Mob2,
      email: data.email,
      aadhar: data.aadhar,
      fname: data.fname,
      focc: data.focc,
      mname: data.mname,
      mocc: data.mocc,
      branch: data.branch,
      minDetail: data.minDetail,
      phyChall: data.phyChall,
      sign: data.sign,
      admissionJEER: data.JEER,
    })
    .save();

  const newStudentDises = await db.models.studentDisease
    .build({
      chronicD: data.chronicD,
      admissionJEER: data.JEER,
    })
    .save();

  res.send("ok");
});

router.get("/geall", async (req, res) => {
  const data = await db.models.admission.findAll({
    include: [
      { model: db.models.addressCurr },
      { model: db.models.addressPerm },
      { model: db.models.HSCDetail },
      { model: db.models.SSCDetail },
      { model: db.models.jeeMainDetails },
      {
        model: db.models.studentPayment,
        include: {
          model: db.models.ddDetail,
        },
      },
      { model: db.models.studentDisease },
      { model: db.models.registrationDetails },
    ],
  });

  res.send(data);
});

module.exports = router;

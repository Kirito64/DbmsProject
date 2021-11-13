const Sequelize = require("sequelize");
const sequelize = require("./sequelize");
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//models
db.feedBack = require("../models/studentFeedback");
db.admissions = require("../models/admission");
db.addresscur = require("../models/addresscur");
db.addressperm = require("../models/addressperm");
db.ddDetails = require("../models/ddDetails");
db.hscdetail = require("../models/hscdetail");
db.sscDetails = require("../models/sscDetails");
db.jeemain = require("../models/jeemain");
db.studentPayment = require("../models/studentPayment");
db.studentDisease = require("../models/studentDisease");

db.addresscur.belongsTo(db.admissions);
db.addressperm.belongsTo(db.admissions);
db.ddDetails.belongsTo(db.studentPayment);
db.hscdetail.belongsTo(db.admissions);
db.sscDetails.belongsTo(db.admissions);
db.jeemain.belongsTo(db.admissions);
db.studentPayment.belongsTo(db.admissions);
db.studentDisease.belongsTo(db.admissions);

module.exports = db;

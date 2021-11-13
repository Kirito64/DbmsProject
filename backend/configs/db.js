const Sequelize = require("sequelize");
const sequelize = require("./sequelize");
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//models
db.feedBack = require("../models/studentFeedback");
db.admissions = require("../models/admission");

module.exports = db;

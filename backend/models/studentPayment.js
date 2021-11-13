const { DataTypes } = require("sequelize");
const sequelize = require("../configs/sequelize");

const StudentPayment = sequelize.define("studentPayment", {
  JEER: { type: DataTypes.STRING },
  JoDD: { type: DataTypes.STRING },
  InDD: { type: DataTypes.STRING },
});

module.exports = StudentPayment;

const { DataTypes } = require("sequelize");
const sequelize = require("../configs/sequelize");

const DD_detail = sequelize.define("ddDetail", {
  DD_NO: { type: DataTypes.STRING },
  DD_Date: { type: DataTypes.DATEONLY },
  DD_Amount: { type: DataTypes.FLOAT },
});

module.exports = DD_detail;

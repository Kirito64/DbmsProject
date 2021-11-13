const { DataTypes } = require("sequelize");
const sequelize = require("../configs/sequelize");

const HSCdetail = sequelize.define("HSCDetail", {
  hscb: { type: DataTypes.STRING },
  hscs: { type: DataTypes.STRING },
  hscy: { type: DataTypes.INTEGER },
  hscm: { type: DataTypes.FLOAT },
  hscp: { type: DataTypes.STRING },
});

module.exports = HSCdetail;

const { DataTypes } = require("sequelize");
const sequelize = require("../configs/sequelize");

const SSCdetail = sequelize.define("SSCDetail", {
  JEER: { type: DataTypes.STRING },
  sscb: { type: DataTypes.STRING },
  sscs: { type: DataTypes.STRING },
  sscy: { type: DataTypes.INTEGER },
  sscm: { type: DataTypes.FLOAT },
  sscp: { type: DataTypes.STRING },
});

module.exports = SSCdetail;

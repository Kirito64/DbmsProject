const { DataTypes } = require("sequelize");
const sequelize = require("../configs/sequelize");

const AddressCurr = sequelize.define("addressCurr", {
  JEER: { type: DataTypes.STRING },
  cAdd: { type: DataTypes.STRING },
  cCity: { type: DataTypes.STRING },
  cState: { type: DataTypes.STRING },
  cPin: { type: DataTypes.STRING },
  cMob: { type: DataTypes.STRING },
});

module.exports = AddressCurr;

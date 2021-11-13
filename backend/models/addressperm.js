const { DataTypes } = require("sequelize");
const sequelize = require("../configs/sequelize");

const AddressPerm = sequelize.define("addressPerm", {
  pAdd: { type: DataTypes.STRING },
  pCity: { type: DataTypes.STRING },
  pState: { type: DataTypes.STRING },
  pPin: { type: DataTypes.STRING },
  pMob: { type: DataTypes.STRING },
});

module.exports = AddressPerm;

const { DataTypes } = require("sequelize");
const sequelize = require("../configs/sequelize");

const regDetails = sequelize.define("registrationDetails", {
  name: {
    type: DataTypes.STRING,
  },
  photo: { type: DataTypes.STRING },
  gender: { type: DataTypes.STRING },
  bloodGroup: { type: DataTypes.STRING },
  DOB: { type: DataTypes.DATE },
  Mob1: { type: DataTypes.STRING },
  Mob2: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  aadhar: { type: DataTypes.STRING },
  fname: { type: DataTypes.STRING },
  focc: { type: DataTypes.STRING },
  mname: { type: DataTypes.STRING },
  mocc: { type: DataTypes.STRING },
  branch: { type: DataTypes.STRING },
  minDetail: { type: DataTypes.STRING },
  phyChall: { type: DataTypes.STRING },
  sign: { type: DataTypes.STRING },
});

module.exports = regDetails;

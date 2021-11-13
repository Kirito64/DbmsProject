const { DataTypes } = require("sequelize");
const sequelize = require("../configs/sequelize");

const Disease = sequelize.define("studentDisease", {
  JEER: { type: DataTypes.STRING },
  chronicD: { type: DataTypes.STRING },
});

module.exports = Disease;

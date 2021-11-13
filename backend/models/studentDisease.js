const { DataTypes } = require("sequelize");
const sequelize = require("../configs/sequelize");

const Disease = sequelize.define("studentDisease", {
  chronicD: { type: DataTypes.STRING },
});

module.exports = Disease;

const { DataTypes } = require("sequelize");
const sequelize = require("../configs/sequelize");

const admission = sequelize.define("admission", {
  JEER: { type: DataTypes.STRING, primaryKey: true },
  DOR: {
    type: DataTypes.DATEONLY,
    defaultValue: new Date(),
  },
  uploaded: { type: DataTypes.STRING },
});

module.exports = admission;

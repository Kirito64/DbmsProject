const { DataTypes } = require("sequelize");
const sequelize = require("../configs/sequelize");

const jeeMain = sequelize.define("jeeMainDetails", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  JEEAR: { type: DataTypes.INTEGER },
  JEER: { type: DataTypes.STRING },
  JEESA: { type: DataTypes.INTEGER },
  JEESM: { type: DataTypes.INTEGER },
  JEESS: { type: DataTypes.INTEGER },
  JEESY: { type: DataTypes.INTEGER },
  AlloctCat: { type: DataTypes.STRING },
  CandCat: { type: DataTypes.STRING },
});

module.exports = jeeMain;

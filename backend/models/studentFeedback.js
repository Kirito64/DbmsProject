const { DataTypes } = require("sequelize");
const sequelize = require("../configs/sequelize.js");

const Feedback = sequelize.define(
  "Feedback",
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    AcYr: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Sem: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Section: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    branch: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Dof: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: new Date(),
    },
    subCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    t1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    t3: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    t4: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    t5: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    t21: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    t22: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    t23: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    t24: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    t25: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);

module.export = Feedback;

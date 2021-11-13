const Sequelize = require("sequelize");
const sequelize = new Sequelize("dbmsproject", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

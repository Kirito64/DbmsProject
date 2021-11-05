const Sequelize = require("sequelize");


const sequelize = new Sequelize("dbmsproject", "root", "password", {
	dialect: "mysql",
	host: "localhost",

})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize



module.exports = db

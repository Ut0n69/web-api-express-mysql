const mysql = require("mysql")
const dbConfig = require("./dbConfig")

module.exports = dbConnection = mysql.createConnection(dbConfig)

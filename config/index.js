require("dotenv").config();
const { createPool } = require("mysql2");

const connection = createPool({
  host: process.env.MYSQL_ADDON_HOST,
  database: process.env.MYSQL_ADDON_DB,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  multipleStatements: true,
  connectionLimit: 30,
}).promise();

module.exports = connection;

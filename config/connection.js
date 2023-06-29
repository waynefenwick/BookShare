const Sequelize = require('sequelize');

require('dotenv').config();

// Sequelize "stands between" you and your db
// Sequelize is the key to open the door to your db
// Sequelize serves as a "user friendly" "go-between" between you and your db
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  
  } else {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PW,
      {
        host: "localhost",
        dialect: "mysql",
        port: 3306,
      }
    );
  }
  
  module.exports = sequelize;
require('dotenv').config();
const mysql = require('mysql2');

const sqlDb = mysql.createConnection(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
);

sqlDb.connect((err) => {
  if (err) {
    return console.error('Error connecting to work_db', err);
    
  }
  console.log('Stable connection established with work_db!');
});

module.exports = sqlDb.promise();
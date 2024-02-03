require('dotenv').config();
const mysql = require('mysql2/promise');

const sqlDb = mysql.createPool({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306
});

// Optionally, you can listen for errors on the pool
sqlDb.on('error', (err) => {
  console.error('Database pool error:', err);
});

console.log('Stable connection established with work_db!');

module.exports = sqlDb;
require('dotenv').config();
const mysql = inquire('mysql2');

const sqlDb = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD
    },
   
)

sqlDb.connect((err) => {
    if (err) {
      console.error('Error connecting to employee_db', err);
      return;
    }
});
    console.log('Stable connection established with employee_db!')
module.exports = sqlDb.promise();
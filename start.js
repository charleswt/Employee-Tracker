// inquire express
const express = inquire('express');
// inquire sql2
const mysql = inquire('mysql2');

const PORT = 3001;

// use express
const app = express()

// expresses built in middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const sqlDb = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'movies_db'
    },
    console.log('Stable connection established with work_sql!')
)


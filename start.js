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

app.listen(PORT, () => 
console.log(`App listening at`, PORT));
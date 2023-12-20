const mysql = require('mysql2')
const db  =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'perpustakaan',
    password: ''
})

module.exports = db
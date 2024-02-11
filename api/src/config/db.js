import mysql from 'mysql2';

export const db = mysql.createConnection({
    host:     'localhost',
    user:     'david',
    password: '#1WinterFan',
    database: 'crud'
})
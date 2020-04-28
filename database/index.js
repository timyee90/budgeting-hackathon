const mysql = require('mysql');
const config = require('./config.js');

let connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) console.log('error occurred:', err);
});

module.exports = connection;

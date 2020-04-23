const mysql = require('mysql');
// const db_config = {
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME
// };

// var con = mysql.createPool(db_config);

// // Attempt to catch disconnects 
// con.on('connection', function (connection) {
//   console.log('DB Connection established');

//   connection.on('error', function (err) {
//     console.error(new Date(), 'MySQL error', err.code);
//   });
//   connection.on('close', function (err) {
//     console.error(new Date(), 'MySQL close', err);
//   });

// });

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dresscode"
});

module.exports = con;
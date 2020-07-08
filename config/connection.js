 // IMPORTING MYSQL DATABASE
const mysql = require("mysql");
// CONNECTING MYSQL DATABASE WITH JAWSDB
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
 // ADDING CREDENTIALS TO HAVE ACCESS TO DB.   
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Reyna1996@",
        database: "burgers_db"
    })
};
connection.connect();
// EXPORTING CONNECTION MODULE.
module.exports = connection;
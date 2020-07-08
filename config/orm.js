 // IMPORTING CONNECTION JS
const connection = require("./connection.js")

// CREATING SYMBOLS DYNAMICALLY PER NEED IN ORM.
function printQuestionMarks(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}
 // FUNCTION THAT CONVERTS OBJECT INTO MYSQL SYNTAX FOR DB.
function objToSql(ob) {
    let arr = [];
 // LOOPING THRU OBJECT
    for (let key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

 // RETURNING ARRAY OF STRINGS WITH ","
    return arr.toString();
}
// METHODS THAT EXECUTE MYSQL COMMANDS.
const orm = {
    selectAll: (table, cb) => {
        let queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: (table, objColVals, condition, cb) => {
        let queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: (table, cols, vals, cb) => {
        let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;
        console.log(queryString);
        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};
 // EXPORTING ORM
module.exports = orm;
const mysql = require('mysql2/promise');
const mySQLConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}

let connection;
async function createConnection() {
    try {
        if(connection) {
            return connection
        }
        connection = await mysql.createConnection(mySQLConfig);
        console.log("Database connected!");
    } catch (e) {
        connection = "";
        console.log("Error occured while connecting to database", e);
    }
}

(async() => {
    await createConnection();
})()

module.exports = createConnection;
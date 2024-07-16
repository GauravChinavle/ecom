const createConnection = require("../mysql/package");

async function insertProduct (data) {
    const dbcon = await createConnection();
    const query = "INSERT INTO products (name, description, category, price, available) VALUES (?,?,?,?,?)";
    const [result] = await dbcon.query(query, [data.name, data.description, data.category, data.price, data.available]);
    console.log(result);
    return result;
}


module.exports = {
    insertProduct
}
const { insertProduct } = require("../dal/models");

async function createProduct (data) {
    const result = await insertProduct(data);
    console.log("createProduct",result);
    return result;
}

module.exports = {
    createProduct
}
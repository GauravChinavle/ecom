const { express } = require("../../utils");
const { createProduct } = require("../../services");

const productsRouter = express.Router();

productsRouter.post("/", async (req, res) => {
    try {
        const result = await createProduct(req.body);
        console.log("createProduct",result);
        res.status(200).send({
            message: "Product inserted successfully"
        })
    } catch (e) {
        res.status(400).send({
            message: e.message || "Error occured while inserting product"
        })
    }
});

module.exports = productsRouter;
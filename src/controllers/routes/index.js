const { express, app } = require("../../utils");
const { logger, validateToken } = require("../middlewares");

const usersRouter = require("./users");
const productsRouter = require("./products");
const indexRouter = express.Router();

indexRouter.use("/healthCheck", (req, res) => {
    res.status(200).send("OK");
})

indexRouter.use(
    logger,
    validateToken
);
indexRouter.use("/users", usersRouter);
indexRouter.use("/products", productsRouter);

app.use(indexRouter);
const { express } = require("../../utils");
const { loginService, getUsers } = require("../../services");
const usersRouter = express.Router();

usersRouter.get("/", async (req, res) => {
    try {
        const result = await getUsers(req.query);
        res.status(200).send({
            message: "Users list fetched successfully",
            data: result
        });
    } catch (e) {
        res.status(400).send({
            message: e.message || "Error occured while login",
        })
    }
});

usersRouter.post("/login", async (req, res) => {
    try {
        const result = await loginService(req.body);
        res.status(200).send({
            message: "User logged in",
            data: result
        });
    } catch (e) {
        res.status(400).send({
            message: e.message || "Error occured while login",
        })
    }
});

module.exports = usersRouter;
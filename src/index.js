const { app, PORT, express } = require("./utils");

// initializes project level middlewares
app.use(express.json());

// initializes routes
require("./controllers/routes");

// initializes database
require("./dal/mysql/package");

app.listen(PORT, () => {
    console.log("Server started running on", PORT);
})
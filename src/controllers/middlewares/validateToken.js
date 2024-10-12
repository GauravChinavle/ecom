const { jwt, JWT_SECRET } = require("../../utils");
const allowWithoutTokenAPIs = ["/users/login"];

module.exports = (req, res, next) => {
    if (allowWithoutTokenAPIs.includes(req.originalUrl)) {
        return next();
    }
    if (!req?.headers?.token) {
        return res.status(400).send({
            message: "Please send token"
        })
    }
    try {
        const decodedToken = jwt.verify(req.headers.token, JWT_SECRET);
        req.body.user = {
            email: decodedToken.email
        }
        next();
    } catch (e) {
        res.status(401).send({
            message: e.message || "Not a valid token"
        })
    }

}
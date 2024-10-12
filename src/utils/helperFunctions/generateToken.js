const { jwt, JWT_SECRET } = require("../requireHelpers");

function generateToken (payload) {
    try {
        const expiresIn = 60 * 60;
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn });
        return {
            token,
            expiresIn
        };
    } catch (e) {
        throw {
            message: e.message || "Error occured while generating JWT token"
        }
    }
}


module.exports = generateToken;
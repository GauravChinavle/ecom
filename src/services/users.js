const { fetchUser, fetchUsers } = require("../dal/models");
const { generateToken } = require("../utils");

async function loginService (data) {
    const [fetchUserResult] = await fetchUser(data);
    if(!fetchUserResult) {
        throw {
            message: "Invalid user"
        }
    }
    const tokenResult = generateToken({
        name: fetchUserResult.name,
        email: fetchUserResult.email,
        role: fetchUserResult.role
    });
    return tokenResult;
}

async function getUsers (data) {
    const result = await fetchUsers(data);
    if(!result?.length) {
        throw {
            message: "No users found",
        }
    }
    return result;
}

module.exports = {
    getUsers,
    loginService
}
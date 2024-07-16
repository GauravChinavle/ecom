const createConnection = require("../mysql/package");

async function fetchUser (data) {
    const dbcon = await createConnection()
    const query = "SELECT u.name as name, u.email as email, r.name as role from users u left join roles r on u.role_id = r.id WHERE u.email = ?";
    const [result] = await dbcon.query(query, [data.email]);
    return result;
}

async function fetchUsers (data) {
    const dbcon = await createConnection();
    let query = "SELECT u.id as id, u.name as name, u.email as email, ua.is_active as is_active, r.name as role, u.created_at as created_at FROM users u LEFT JOIN roles r on u.role_id = r.id LEFT JOIN user_activities ua on u.id = ua.user_id WHERE 1 = 1";

    if (data.role) {
        query += ` AND r.name = '${data.role}'`
    }

    if (data.active) {
        query += ` AND ua.is_active = ${data.active ? 1 : 0}`
    }

    if (data.sort) {
        query += ` ORDER BY ${data.sort}`
    }

    if (data.page && data.limit) {
        query += ` LIMIT ${data.limit} OFFSET ${(data.page -1) * data.limit}`;
    }

    const [result] = await dbcon.query(query);
    return result
}


module.exports = {
    fetchUser,
    fetchUsers
}
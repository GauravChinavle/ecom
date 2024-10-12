module.exports = (req, res, next) => {
    const payload = {};
    if (req.originalUrl) {
        payload.apiName = req.originalUrl;
    }
    if (req.headers) {
        payload.headers = req.headers;
    }
    if (req.body) {
        payload.body = req.body;
    }
    if (req.query) {
        payload.query = req.query;
    }
    if (req.params) {
        payload.params = req.params;
    }
    console.log("request sent by client", payload);
    next();
}
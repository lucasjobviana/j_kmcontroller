"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const AppResponseError_1 = require("../AppResponseError");
const checkUserAuthentication = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        throw new AppResponseError_1.default('Token not found');
    }
    const token = authorization.split(' ')[1];
    try {
        const user = jwt.verify(token, 'calafjksaoiekalladioadj');
        req.body.user = user;
    }
    catch (error) {
        throw new AppResponseError_1.default('Token must be a valid token');
    }
    next();
};
exports.default = checkUserAuthentication;
//# sourceMappingURL=checkUserAuthentication.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const getNewToken = (user) => {
    const token = jwt.sign({ data: user }, 'calafjksaoiekalladioadj', {
        algorithm: 'HS256',
        expiresIn: '1d',
    });
    return token;
};
exports.default = getNewToken;
//# sourceMappingURL=auth.js.map
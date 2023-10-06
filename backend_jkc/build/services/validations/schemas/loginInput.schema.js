"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const loginInputSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});
exports.default = loginInputSchema;
//# sourceMappingURL=loginInput.schema.js.map
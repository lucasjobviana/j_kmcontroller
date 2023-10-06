"use strict";
const loginInput_schema_1 = require("../schemas/loginInput.schema");
const AppResponseError_1 = require("../../../AppResponseError");
const loginInputValidator = (user) => {
    const { error } = loginInput_schema_1.default.validate(user);
    if (error)
        throw new AppResponseError_1.default('Invalid email or password');
};
module.exports = loginInputValidator;
//# sourceMappingURL=loginInput.validator.js.map
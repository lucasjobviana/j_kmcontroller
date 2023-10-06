"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const AppResponseError_1 = require("../AppResponseError");
const UserModel_1 = require("../models/UserModel");
const auth_1 = require("../auth");
const loginInputValidator = require("./validations/validators/loginInput.validator");
class UserService {
    constructor(userModel = new UserModel_1.default()) {
        this.userModel = userModel;
    }
    async getAll() {
        const allUsers = await this.userModel.findAll();
        return allUsers;
    }
    static validateLoginInput(userToLogin) {
        loginInputValidator(userToLogin);
    }
    async login(userToLogin) {
        UserService.validateLoginInput(userToLogin);
        const user = await this.userModel.login(userToLogin.email);
        if (!user
            || !bcrypt.compareSync(userToLogin.password, user.password)) {
            throw new AppResponseError_1.default('Invalid email or password');
        }
        return { token: (0, auth_1.default)(user) };
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map
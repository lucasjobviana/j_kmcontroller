"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppResponseError_1 = require("../AppResponseError");
const UserService_1 = require("../services/UserService");
class UserController {
    constructor(_loginProps = ['email', 'password'], userService = new UserService_1.default()) {
        this._loginProps = _loginProps;
        this.userService = userService;
    }
    static validateLoginProps(body, loginProps) {
        if (!loginProps.every((prop) => body[prop])) {
            throw new AppResponseError_1.default('All fields must be filled');
        }
    }
    async findAll(_req, res) {
        const users = await this.userService.getAll();
        res.status(200).json(users);
    }
    static getRoleByUserToken(req, res) {
        res.status(200).json({ role: req.body.user.data.role });
    }
    async login(req, res) {
        const { email, password } = req.body;
        UserController.validateLoginProps(req.body, this._loginProps);
        const user = await this.userService.login({ email, password });
        res.status(200).json(user);
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map
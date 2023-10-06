"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppResponseError_1 = require("../AppResponseError");
const SequelizeUserModel_1 = require("../database/models/SequelizeUserModel");
class UserModel {
    constructor() {
        this.model = SequelizeUserModel_1.default;
    }
    async findAll() {
        const dbData = await this.model.findAll();
        return dbData.map(({ id, username, role, password, email }) => ({ id, username, role, password, email }));
    }
    async login(email) {
        const dbData = await this.model.findOne({ where: { email } });
        if (!dbData)
            throw new AppResponseError_1.default('Invalid email or password');
        return dbData.dataValues;
    }
}
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map
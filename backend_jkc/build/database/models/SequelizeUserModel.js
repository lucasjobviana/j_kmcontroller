"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class SequelizeUserModel extends sequelize_1.Model {
}
SequelizeUserModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    password: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    role: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    email: { type: sequelize_1.DataTypes.STRING, allowNull: false },
}, {
    sequelize: _1.default,
    modelName: 'users',
    timestamps: false,
    underscored: true,
});
exports.default = SequelizeUserModel;
//# sourceMappingURL=SequelizeUserModel.js.map
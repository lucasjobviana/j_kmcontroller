"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const up = (queryInterface) => {
    return queryInterface.createTable('users', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        role: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        email: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        password: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    });
};
const down = (queryInterface) => {
    return queryInterface.dropTable('users');
};
exports.default = {
    up,
    down,
};
//# sourceMappingURL=01-create-user.js.map
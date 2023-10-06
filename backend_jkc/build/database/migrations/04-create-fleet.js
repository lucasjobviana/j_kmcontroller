"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const up = (queryInterface) => {
    return queryInterface.createTable('vehicles', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: { type: sequelize_1.DataTypes.STRING, allowNull: false, field: 'name' },
        licensePlate: { type: sequelize_1.DataTypes.STRING, allowNull: false, field: 'license_plate' },
    });
};
const down = (queryInterface) => {
    return queryInterface.dropTable('vehicles');
};
exports.default = {
    up,
    down,
};
//# sourceMappingURL=04-create-fleet.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const up = (queryInterface) => {
    return queryInterface.createTable('places', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: { type: sequelize_1.DataTypes.STRING, allowNull: false, field: 'name' },
        description: { type: sequelize_1.DataTypes.STRING, allowNull: false, field: 'description' },
        fullAddress: { type: sequelize_1.DataTypes.STRING, allowNull: false, field: 'full_address' },
    });
};
const down = (queryInterface) => {
    return queryInterface.dropTable('places');
};
exports.default = {
    up,
    down,
};
//# sourceMappingURL=05-create-place.js.map
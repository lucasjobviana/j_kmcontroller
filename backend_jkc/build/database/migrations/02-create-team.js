"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const up = (queryInterface) => {
    return queryInterface.createTable('teams', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        teamName: { type: sequelize_1.DataTypes.STRING, allowNull: false, field: 'team_name' },
    });
};
const down = (queryInterface) => {
    return queryInterface.dropTable('teams');
};
exports.default = {
    up,
    down,
};
//# sourceMappingURL=02-create-team.js.map
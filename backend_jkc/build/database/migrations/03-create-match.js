"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const up = (queryInterface) => {
    return queryInterface.createTable('matches', {
        homeTeamId: {
            type: sequelize_1.DataTypes.INTEGER, allowNull: false, field: 'home_team_id',
            references: {
                model: 'teams',
                key: 'id',
            },
        },
        homeTeamGoals: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, field: 'home_team_goals' },
        awayTeamId: {
            type: sequelize_1.DataTypes.INTEGER, allowNull: false, field: 'away_team_id',
            references: {
                model: 'teams',
                key: 'id',
            },
        },
        awayTeamGoals: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, field: 'away_team_goals' },
        inProgress: { type: sequelize_1.DataTypes.BOOLEAN, allowNull: true, field: 'in_progress', defaultValue: true },
        id: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    });
};
const down = (queryInterface) => {
    return queryInterface.dropTable('matches');
};
exports.default = {
    up,
    down,
};
//# sourceMappingURL=03-create-match.js.map
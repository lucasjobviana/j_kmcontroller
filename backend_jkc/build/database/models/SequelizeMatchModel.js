"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const SequelizeTeamModel_1 = require("./SequelizeTeamModel");
class SequelizeMatchModel extends sequelize_1.Model {
}
SequelizeMatchModel.init({
    homeTeamId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'teams', key: 'id',
        },
    },
    homeTeamGoals: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    awayTeamId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'teams', key: 'id',
        },
    },
    id: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    awayTeamGoals: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    inProgress: { type: sequelize_1.DataTypes.BOOLEAN, allowNull: true, defaultValue: true },
}, {
    sequelize: _1.default,
    modelName: 'matches',
    timestamps: false,
    underscored: true,
});
SequelizeMatchModel.hasOne(SequelizeTeamModel_1.default, { foreignKey: 'id', sourceKey: 'homeTeamId', as: 'homeTeam' });
SequelizeMatchModel.hasOne(SequelizeTeamModel_1.default, { foreignKey: 'id', sourceKey: 'awayTeamId', as: 'awayTeam' });
SequelizeTeamModel_1.default.belongsTo(SequelizeMatchModel, { foreignKey: 'id', targetKey: 'homeTeamId', as: 'homeTeam' });
SequelizeTeamModel_1.default.belongsTo(SequelizeMatchModel, { foreignKey: 'id', targetKey: 'awayTeamId', as: 'awayTeam' });
exports.default = SequelizeMatchModel;
//# sourceMappingURL=SequelizeMatchModel.js.map
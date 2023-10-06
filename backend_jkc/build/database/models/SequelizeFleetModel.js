"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class SequelizeFleetModel extends sequelize_1.Model {
}
SequelizeFleetModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    licensePlate: { type: sequelize_1.DataTypes.STRING, allowNull: false },
}, {
    sequelize: _1.default,
    modelName: 'vehicles',
    timestamps: false,
    underscored: true,
});
exports.default = SequelizeFleetModel;
//# sourceMappingURL=SequelizeFleetModel.js.map
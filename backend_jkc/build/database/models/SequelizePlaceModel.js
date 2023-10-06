"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class SequelizePlaceModel extends sequelize_1.Model {
}
SequelizePlaceModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    description: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    fullAddress: { type: sequelize_1.DataTypes.STRING, allowNull: false },
}, {
    sequelize: _1.default,
    modelName: 'vehicles',
    timestamps: false,
    underscored: true,
});
exports.default = SequelizePlaceModel;
//# sourceMappingURL=SequelizePlaceModel.js.map
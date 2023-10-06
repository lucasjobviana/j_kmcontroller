"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const SequelizeFleetModel_1 = require("../database/models/SequelizeFleetModel");
class TeamModel {
    constructor() {
        this.model = SequelizeFleetModel_1.default;
    }
    async findAll(whereOption = {}) {
        const dbData = await this.model.findAll({ ...whereOption });
        return dbData.map(({ id, name, licensePlate }) => ({ id, name, licensePlate }));
    }
    async findAllLikeByName(name = "") {
        const dbData = await SequelizeFleetModel_1.default.findAll({ where: {
                name: {
                    [sequelize_1.Op.like]: `%${name}%`,
                }
            }, });
        return dbData.map(({ id, name, licensePlate }) => ({ id, name, licensePlate }));
    }
    async deleteVehicle(id) {
        await this.model.destroy({ where: { id } });
    }
    async updateVehicle(id, vehicle) {
        const updatedVehicle = await this.model.update(vehicle, { where: { id } });
        if (updatedVehicle[0] === 0) {
            throw new Error('Vehicle not found');
        }
        return vehicle;
    }
    async createVehicle(vehicle) {
        const createdVehicle = await this.model.create(vehicle);
        return createdVehicle;
    }
}
exports.default = TeamModel;
//# sourceMappingURL=FleetModel.js.map
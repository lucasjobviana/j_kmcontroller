"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FleetModel_1 = require("../models/FleetModel");
class FleetService {
    constructor(fleetModel = new FleetModel_1.default()) {
        this.fleetModel = fleetModel;
    }
    async getAll() {
        const fleet = await this.fleetModel.findAll({});
        return fleet;
    }
    async findAllLikeByName(name) {
        const fleet = await this.fleetModel.findAllLikeByName(name);
        return fleet;
    }
    async deleteVehicle(id) {
        await this.fleetModel.deleteVehicle(id);
    }
    async updateVehicle(id, vehicle) {
        const updatedVehicle = await this.fleetModel.updateVehicle(id, vehicle);
        return updatedVehicle;
    }
    async createVehicle(vehicle) {
        const createdVehicle = await this.fleetModel.createVehicle(vehicle);
        return createdVehicle;
    }
}
exports.default = FleetService;
//# sourceMappingURL=FleetService.js.map
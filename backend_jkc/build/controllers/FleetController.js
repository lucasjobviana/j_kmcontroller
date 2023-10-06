"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FleetService_1 = require("../services/FleetService");
class FleetController {
    constructor(fleetService = new FleetService_1.default()) {
        this.fleetService = fleetService;
    }
    // public async findById(req: Request, res: Response) {
    //   const { id } = req.params;
    //   const team = await this.fleetService.getById(Number(id));
    //   res.status(200).json(team);
    // }
    async findAll(_req, res) {
        const fleet = await this.fleetService.getAll();
        res.status(200).json(fleet);
    }
    async findAllLikeByName(req, res) {
        const { search } = req.query;
        const fleet = await this.fleetService.findAllLikeByName((search === null || search === void 0 ? void 0 : search.toString()) || '');
        res.status(200).json(fleet);
    }
    async deleteVehicle(req, res) {
        const { id } = req.params;
        await this.fleetService.deleteVehicle(id);
        return res.status(204).json({ hasDeleted: true });
    }
    async updateVehicle(req, res) {
        const { id } = req.params;
        const vehicle = req.body;
        const updatedVehicle = await this.fleetService.updateVehicle(id, vehicle);
        return res.status(200).json(updatedVehicle);
    }
    async createVehicle(req, res) {
        const vehicle = req.body;
        const createdVehicle = await this.fleetService.createVehicle(vehicle);
        return res.status(201).json(createdVehicle);
    }
}
exports.default = FleetController;
//# sourceMappingURL=FleetController.js.map
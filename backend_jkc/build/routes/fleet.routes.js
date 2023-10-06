"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FleetController_1 = require("../controllers/FleetController");
const teamController = new FleetController_1.default();
const router = (0, express_1.Router)();
router.get('/name', (req, res) => teamController.findAllLikeByName(req, res));
router.delete('/:id', (req, res) => teamController.deleteVehicle(req, res));
router.put('/:id', (req, res) => teamController.updateVehicle(req, res));
router.post('/', (req, res) => teamController.createVehicle(req, res));
exports.default = router;
//# sourceMappingURL=fleet.routes.js.map
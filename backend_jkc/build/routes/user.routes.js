"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const userController = new UserController_1.default();
const router = (0, express_1.Router)();
router.get('/', (req, res) => userController.findAll(req, res));
exports.default = router;
//# sourceMappingURL=user.routes.js.map
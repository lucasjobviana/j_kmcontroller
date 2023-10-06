"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const checkUserAuthentication_1 = require("../middlewares/checkUserAuthentication");
const UserController_1 = require("../controllers/UserController");
const userController = new UserController_1.default();
const router = (0, express_1.Router)();
router.post('/', (req, res) => userController.login(req, res));
router.get('/role', (req, res, next) => (0, checkUserAuthentication_1.default)(req, res, next), (req, res) => UserController_1.default.getRoleByUserToken(req, res));
exports.default = router;
//# sourceMappingURL=login.routes.js.map
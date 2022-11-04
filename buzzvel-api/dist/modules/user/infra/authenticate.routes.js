"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRouter = void 0;
const express_1 = require("express");
const AuthenticateUserController_1 = require("../useCases/authenticateUser/AuthenticateUserController");
exports.authenticateRouter = (0, express_1.Router)();
const authenticateUserController = new AuthenticateUserController_1.AuthenticateUserController();
exports.authenticateRouter.post('/', authenticateUserController.handle);

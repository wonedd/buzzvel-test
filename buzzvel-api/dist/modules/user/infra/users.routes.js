"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const ensureAuthenticated_1 = require("../../../shared/middlewares/ensureAuthenticated");
const CreateUserController_1 = require("../useCases/createUser/CreateUserController");
const ListUsersController_1 = require("../useCases/listUsers/ListUsersController");
exports.usersRouter = (0, express_1.Router)();
const createUserController = new CreateUserController_1.CreateUserController();
const listUsersController = new ListUsersController_1.ListUsersController();
exports.usersRouter.post('/', createUserController.handle);
exports.usersRouter.get('/', ensureAuthenticated_1.ensureAuthenticated, listUsersController.handle);
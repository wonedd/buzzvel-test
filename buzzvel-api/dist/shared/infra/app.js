"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
require("reflect-metadata");
const AppError_1 = require("../errors/AppError");
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
require("../container");
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(routes_1.routes);
app.use((err, request, response, _next) => {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }
    return response.status(500).json({
        status: 'error',
        message: `Internal server error - ${err.message}`,
    });
});

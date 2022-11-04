"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const QrcodesRepository_1 = require("../repositories/implementations/QrcodesRepository");
tsyringe_1.container.registerSingleton('QrcodesRepository', QrcodesRepository_1.QrcodesRepository);

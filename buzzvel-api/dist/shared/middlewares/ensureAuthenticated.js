"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
const UsersRepository_1 = require("../../modules/user/repositories/implementations/UsersRepository");
const AppError_1 = require("../errors/AppError");
const jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticated(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new AppError_1.AppError('Token missing', 401);
        }
        const [, token] = authHeader.split(' ');
        try {
            const { sub: user_id } = (0, jsonwebtoken_1.verify)(token, '678477a5d61962a6c7d8f78e2d1ef291');
            const usersRepository = new UsersRepository_1.UsersRepository();
            const user = yield usersRepository.findById(user_id);
            if (!user) {
                throw new AppError_1.AppError('Something wrong!', 401);
            }
            request.user = {
                id: user_id,
            };
            next();
        }
        catch (err) {
            throw new AppError_1.AppError('Token invalid', 401);
        }
    });
}
exports.ensureAuthenticated = ensureAuthenticated;

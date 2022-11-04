import { Router } from 'express';
import { AuthenticateUserController } from '../useCases/authenticateUser/AuthenticateUserController';

export const authenticateRouter = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRouter.post('/', authenticateUserController.handle);

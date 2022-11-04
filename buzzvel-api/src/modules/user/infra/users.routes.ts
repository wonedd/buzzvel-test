import { Router } from 'express';
import { ensureAuthenticated } from '@shared/middlewares/ensureAuthenticated';
import { CreateUserController } from '../useCases/createUser/CreateUserController';
import { ListUsersController } from '../useCases/listUsers/ListUsersController';
import { GetUserController } from '../useCases/getUser/GetUserController';

export const usersRouter = Router();

const createUserController = new CreateUserController();

const listUsersController = new ListUsersController();

const getUserController = new GetUserController();

usersRouter.post('/', createUserController.handle);

usersRouter.get('/', ensureAuthenticated, listUsersController.handle);

usersRouter.get('/user/:token', getUserController.handle);

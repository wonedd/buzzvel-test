import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { container } from 'tsyringe';
import { UsersRepository } from '../repositories/implementations/UsersRepository';

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository,
);

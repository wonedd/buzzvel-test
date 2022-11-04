/* eslint-disable @typescript-eslint/no-unused-vars */
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { User } from '@prisma/client';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.list();

    if (!users) {
      throw new AppError('No users found');
    }

    return users;
  }
}

export { ListUsersUseCase };

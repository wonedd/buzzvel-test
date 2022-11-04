/* eslint-disable @typescript-eslint/no-unused-vars */
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { User } from '@prisma/client';
import { verify } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

@injectable()
export class GetUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) {}

  public async execute(token: string): Promise<User> {
    const { sub } = verify(token, '678477a5d61962a6c7d8f78e2d1ef291') as {
      sub: string;
    };

    const user = await this.usersRepository.findById(sub);

    return user;
  }
}

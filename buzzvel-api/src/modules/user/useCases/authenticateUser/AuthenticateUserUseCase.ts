/* eslint-disable prettier/prettier */
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { AppError } from '@shared/errors/AppError';
import { sign } from 'jsonwebtoken';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inject, injectable } from 'tsyringe';


interface IRequest {
  id: string;
}

interface IResponse { 
  user: {
    linkedinUrl: string;
    githubUrl: string;
    name:string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) {}

  async execute({ id }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

  
    const token = sign({}, '678477a5d61962a6c7d8f78e2d1ef291', {
      subject: user.id,
      expiresIn: '1d',
    });

    const tokenReturn: IResponse = {
      token,
      user:{
        linkedinUrl: user.linkedinUrl,
        githubUrl: user.githubUrl,
        name: user.name,
      }
  }

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };

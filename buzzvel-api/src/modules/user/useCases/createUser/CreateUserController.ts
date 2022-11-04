import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { linkedinUrl, githubUrl, name } = request.body;

    const createUserUC = container.resolve(CreateUserUseCase);

    const user = await createUserUC.execute({
      linkedinUrl,
      githubUrl,
      name,
    });

    return response.status(201).json(user);
  }
}

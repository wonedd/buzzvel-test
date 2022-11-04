import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { GetUserUseCase } from './GetUserUseCase';

export class GetUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { token } = request.params;

    const getUserUseCase = container.resolve(GetUserUseCase);

    const user = await getUserUseCase.execute(token);

    return response.json(user);
  }
}

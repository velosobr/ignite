import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.body;

    const userList = this.listAllUsersUseCase.execute(user_id);
    if (!userList)
      return response.status(400).json({
        error: "The user already exists",
      });
    return response.status(200).send();
  }
}

export { ListAllUsersController };

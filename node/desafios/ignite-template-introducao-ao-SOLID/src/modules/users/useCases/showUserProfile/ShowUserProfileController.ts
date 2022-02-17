import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.body;

    const userProfile = this.showUserProfileUseCase.execute(user_id);
    if (!userProfile)
      return response.status(404).json({
        error: "User Profile not found",
      });
    return response.status(200).send();
  }
}

export { ShowUserProfileController };

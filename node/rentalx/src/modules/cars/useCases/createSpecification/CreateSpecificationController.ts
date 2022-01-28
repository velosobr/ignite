import { Request, Response } from "express";

class CreateSecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {}
}

export { CreateSecificationController };

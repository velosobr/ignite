import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = SpecificationRepository.getInstance();

const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);

const createSecificationController = new CreateSecificationController(
  createSpecificationUseCase
);

export { createSecificationController };

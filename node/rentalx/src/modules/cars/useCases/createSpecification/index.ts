import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";

const specificationRepository = SpecificationRepository.getInstance();

const createSpecificationUseCase = new CreateSpecificationUseCase(
   specificationRepository
);

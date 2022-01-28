import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute({ description, name }: IRequest) {
    const specAlreadyExists = this.specificationsRepository.findByName(name);

    if (specAlreadyExists) {
      throw new Error(`Specification ${name} already exists`);
    }
    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };

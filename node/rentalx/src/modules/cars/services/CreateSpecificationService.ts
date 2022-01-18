import { ISpecificationRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationRepository) {}
  execute({ name, description }: IRequest): void {
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

export { CreateSpecificationService };

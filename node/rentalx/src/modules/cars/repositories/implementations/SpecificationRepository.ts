import { Specification } from "../../entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationsRepository";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: SpecificationRepository;

  constructor() {
    this.specifications = [];
  }

  list(): Specification[] {
    return this.specifications;
  }

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }
    return SpecificationRepository.INSTANCE;
  }

  findByName(name: string): Specification {
    const spec = this.specifications.find((spec) => spec.name === name);
    return spec;
  }
  create({ description, name }: ICreateSpecificationDTO): void {
    const spec = new Specification();

    Object.assign(spec, {
      name,
      description,
      create_at: new Date(),
    });
    this.specifications.push(spec);
  }
}

export { SpecificationRepository };

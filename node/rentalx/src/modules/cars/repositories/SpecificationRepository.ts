import { Specification } from "../model/Specification";
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from "./ISpecificationsRepository";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
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

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

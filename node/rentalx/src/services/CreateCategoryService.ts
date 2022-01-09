interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  execute({ description, name }: IRequest) {
    const categoryAlreadyExists = categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      return res.status(400).json({
        error: "the category already exists",
      });
    }
    categoriesRepository.create({
      name,
      description,
    });
  }
}

export { CreateCategoryService };

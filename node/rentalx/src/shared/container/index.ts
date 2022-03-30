import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { CreateCategoryUseCase } from "../../modules/cars/useCases/createCategory/CreateCategoryUseCase";

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);
container.registerSingleton<CreateCategoryUseCase>(
  "CreateCategoryUseCase",
  CreateCategoryUseCase
);

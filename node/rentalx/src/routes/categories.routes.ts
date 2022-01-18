import { response, Router } from "express";

import { Category } from "../modules/cars/model/Category";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryUseCase } from "../modules/cars/useCases/createCategory/CreateCategoryUseCase";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

const categories: Category[] = [];

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryUseCase(categoriesRepository);

  createCategoryService.execute({ name, description });
  return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  const all = categoriesRepository.list();

  return res.json(all);
});

export { categoriesRoutes };

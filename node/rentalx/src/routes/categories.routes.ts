import { response, Router } from "express";

import { Category } from "../modules/cars/model/Category";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryUseCase } from "../modules/cars/useCases/createCategory/CreateCategoryUseCase";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

const categories: Category[] = [];

categoriesRoutes.post("/", (req, res) => {
  
});

categoriesRoutes.get("/", (req, res) => {
  const all = categoriesRepository.list();

  return res.json(all);
});

export { categoriesRoutes };

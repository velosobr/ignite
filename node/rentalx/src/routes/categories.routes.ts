import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoryController } from "../modules/cars/useCases/ListCategory";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (req, res) => {
  return listCategoryController.handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});
export { categoriesRoutes };

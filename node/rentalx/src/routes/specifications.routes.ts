import { Router } from "express";

import { createSecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (req, res) => {
  return createSecificationController.handle(req, res);
});

export { specificationsRoutes };

import express from "express";

import {
  createServiceOrderController,
  getAllServiceOrderController,
  getByIdServiceOrderController,
} from "./dependencies";

export const serviceOrderRouter = express.Router();

serviceOrderRouter.get(
  "/",
  getAllServiceOrderController.run.bind(getAllServiceOrderController)
);
serviceOrderRouter.get(
  "/:id",
  getByIdServiceOrderController.run.bind(getByIdServiceOrderController)
);
serviceOrderRouter.post(
  "/",
  createServiceOrderController.run.bind(createServiceOrderController)
);

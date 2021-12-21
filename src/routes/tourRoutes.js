import express from "express";

import tourController from "../controllers/tourController";
import verifyToken from "../middlewares/verifyToken";
import verifyAccess from "../middlewares/verifyAccess";

const tourRoute = express.Router();

tourRoute.post(
  "/create",
  verifyToken,
  verifyAccess("admin"),
  tourController.createTour
);
tourRoute.get("/all", tourController.getAllTour);
tourRoute.get("/:id", tourController.getOneTour);

export default tourRoute;

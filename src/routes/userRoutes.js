import express from "express";
import UserController from "../controllers/userController";
import Validator from "../middlewares/validator";
import DataChecker from "../middlewares/datachecker";
import verifyToken from "../middlewares/verifyToken";
import verifyAccess from "../middlewares/verifyAccess";

const userRouter = express.Router();

userRouter.post(
  "/register",
  Validator.newAccountRules(),
  Validator.validateInput,
  DataChecker.isEmailExist,
  UserController.createUser
);
userRouter.post("/login", UserController.userLogin);
userRouter.get("/all", UserController.getAllUsers);

//booking paths
userRouter.post(
  "/book/:id",
  verifyToken,
  verifyAccess("user"),
  UserController.bookTour
);

userRouter.get("/books/all", UserController.getAllBookings);
userRouter.get(
  "/books/me",
  verifyToken,
  verifyAccess("user"),
  UserController.getAllBookingsByUser
);
userRouter.get(
  "/books/:idtour",
  verifyToken,
  verifyAccess("admin"),
  UserController.getAllBookingsByTourId
);




userRouter.get("/profile/:id", UserController.getOneUser);
userRouter.delete("/profile/:id", UserController.deleteOneUser);
// userRouter.get("/bookings",UserController.getaAllBookingByUserId);

export default userRouter;

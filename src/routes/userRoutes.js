import express from "express";
import UserController from "../controllers/userController";


const userRouter = express.Router();

userRouter.post("/register", UserController.createUser)
userRouter.get("/all", UserController.getAllUsers);
userRouter.get("/:id",UserController.getOneUser);
userRouter.delete("/:id",UserController.deleteOneUser);


export default userRouter;
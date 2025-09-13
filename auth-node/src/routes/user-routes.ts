import { Router } from "express";
import userController from "../controllers/user-controller.js";
import schemaValidation from "../middlewares/schema-validation.js";
import { userSchema } from "../schemas/user-schema.js";

export const userRouter: Router = Router();

userRouter.post("/", schemaValidation(userSchema), userController.addUser);

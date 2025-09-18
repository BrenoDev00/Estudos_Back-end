import { Router } from "express";
import userController from "../controllers/user-controller.js";
import schemaValidation from "../middlewares/schema-validation.js";
import userSchema from "../schemas/user-schema.js";
import statusSchema from "../schemas/status-schema.js";

const userRouter: Router = Router();

userRouter.get("/:id", userController.getUserById);

userRouter.post(
  "/registration",
  schemaValidation(userSchema),
  userController.addUser
);

userRouter.patch(
  "/status/:id",
  schemaValidation(statusSchema),
  userController.changeUserStatus
);

export default userRouter;

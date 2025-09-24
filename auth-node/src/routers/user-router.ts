import { Router } from "express";
import userController from "../controllers/user-controller.js";
import schemaValidation from "../middlewares/schema-validation.js";
import statusSchema from "../schemas/status-schema.js";

const userRouter: Router = Router();

userRouter.get("/:id", userController.getUserById);

userRouter.patch(
  "/status/:id",
  schemaValidation(statusSchema),
  userController.changeUserStatus
);

export default userRouter;

import { Router } from "express";
import userController from "../controllers/user-controller.js";
import schemaValidator from "../middlewares/schema-validator.js";
import statusSchema from "../schemas/status-schema.js";
import authValidator from "../middlewares/auth-validator.js";

const userRouter: Router = Router();

userRouter.use(authValidator);

userRouter.get("/:id", userController.getUserById);

userRouter.patch(
  "/status/:id",
  schemaValidator(statusSchema),
  userController.changeUserStatus
);

export default userRouter;

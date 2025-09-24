import { Router } from "express";
import authController from "../controllers/auth-controller.js";
import schemaValidation from "../middlewares/schema-validation.js";
import loginSchema from "../schemas/login-schema.js";
import userSchema from "../schemas/user-schema.js";

const authRouter: Router = Router();

authRouter.post(
  "/registration",
  schemaValidation(userSchema),
  authController.register
);

authRouter.post("/login", schemaValidation(loginSchema), authController.login);

export default authRouter;

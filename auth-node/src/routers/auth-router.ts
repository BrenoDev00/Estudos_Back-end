import { Router } from "express";
import authController from "../controllers/auth-controller.js";
import schemaValidation from "../middlewares/schema-validation.js";
import loginSchema from "../schemas/login-schema.js";

const authRouter: Router = Router();

authRouter.post("/auth", schemaValidation(loginSchema), authController.login);

export default authRouter;

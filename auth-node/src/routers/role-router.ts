import roleSchema from "../schemas/role-schema.js";
import roleController from "../controllers/role-controller.js";
import { Router } from "express";
import schemaValidator from "../middlewares/schema-validator.js";
import authValidator from "../middlewares/auth-validator.js";

const roleRouter: Router = Router();

roleRouter.use(authValidator);

roleRouter.put(
  "/:id",
  schemaValidator(roleSchema),
  roleController.updateRoleById
);

export default roleRouter;

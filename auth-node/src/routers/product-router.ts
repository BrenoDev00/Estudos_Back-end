import { Router } from "express";
import productController from "../controllers/product-controller.js";
import authValidator from "../middlewares/auth-validator.js";
import schemaValidator from "../middlewares/schema-validator.js";
import productSchema from "../schemas/product-schema.js";

const productRouter: Router = Router();

productRouter.use(authValidator);

productRouter.get("", productController.getProducts);

productRouter.post(
  "/:categoryId",
  schemaValidator(productSchema),
  productController.addProduct
);

export default productRouter;

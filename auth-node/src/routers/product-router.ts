import { Router } from "express";
import productController from "../controllers/product-controller.js";
import authValidator from "../middlewares/auth-validator.js";

const productRouter: Router = Router();

productRouter.use(authValidator);

productRouter.get("", productController.getProducts);

export default productRouter;

import { Response, Request } from "express";
import productService from "../services/product-service.js";
import { IProductController } from "../types/controllers/product-controller.type.js";
import { StatusCode } from "../types/status-code.type.js";
import InternalError from "../utils/errors/internal-error.js";

class ProductController implements IProductController {
  async getProducts(_: Request, res: Response): Promise<Response> {
    try {
      const products = await productService.getProducts();

      return res.status(StatusCode.OK).send(products);
    } catch {
      throw new InternalError();
    }
  }
}

const productController = new ProductController();

export default productController;

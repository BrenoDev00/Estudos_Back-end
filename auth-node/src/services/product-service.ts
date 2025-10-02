import productRepository from "../repositories/product-repository.js";
import { AllProducts } from "../types/all-products.type.js";
import { IProductService } from "../types/services/product-service.type.js";

class ProductService implements IProductService {
  async getProducts(): Promise<AllProducts[]> {
    const products = await productRepository.getProducts();

    return products;
  }
}

const productService = new ProductService();

export default productService;

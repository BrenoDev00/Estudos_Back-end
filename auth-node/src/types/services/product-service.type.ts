import { AllProducts } from "../all-products.type.js";
import { NewProduct } from "../new-product.type.js";

export interface IProductService {
  getProducts(): Promise<AllProducts[]>;

  addProduct(
    productData: Omit<NewProduct, "id" | "createdAt">
  ): Promise<NewProduct>;

  // editProduct(productData: Omit<Product, "createdAt">): Promise<Product>;

  deleteProduct(productId: string): Promise<void>;
}

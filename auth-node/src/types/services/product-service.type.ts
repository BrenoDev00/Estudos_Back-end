import { AllProducts } from "../all-products.type.js";
import { ProductData } from "../new-product.type.js";

export interface IProductService {
  getProducts(): Promise<AllProducts[]>;

  addProduct(
    productData: Omit<ProductData, "id" | "createdAt">
  ): Promise<ProductData>;

  editProduct(
    productData: Omit<ProductData, "createdAt">
  ): Promise<Omit<ProductData, "createdAt">>;

  deleteProduct(productId: string): Promise<void>;
}

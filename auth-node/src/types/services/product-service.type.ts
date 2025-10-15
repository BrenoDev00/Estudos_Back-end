import { ProductData } from "../new-product.type.js";
import { ProductWithCategories } from "../product-with-categories.type.js";

export interface IProductService {
  getProducts(): Promise<ProductWithCategories[]>;

  addProduct(
    productData: Omit<ProductData, "id" | "createdAt">
  ): Promise<ProductData>;

  editProduct(
    productData: Omit<ProductData, "createdAt">
  ): Promise<Omit<ProductData, "createdAt">>;

  deleteProduct(productId: string): Promise<void>;
}

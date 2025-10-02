import { AllProducts } from "../all-products.type.js";

export interface IProductRepository {
  getProducts(): Promise<AllProducts[]>;
}

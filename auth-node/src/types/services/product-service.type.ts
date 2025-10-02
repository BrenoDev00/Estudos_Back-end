import { AllProducts } from "../all-products.type.js";

export interface IProductService {
  getProducts(): Promise<AllProducts[]>;
}

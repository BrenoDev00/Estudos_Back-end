import { Product } from "@prisma/client";
import productRepository from "../repositories/product-repository.js";
import { AllProducts } from "../types/all-products.type.js";
import { IProductService } from "../types/services/product-service.type.js";
import productCategoryRepository from "../repositories/product-category-repository.js";
import {
  PRODUCT_CATEGORY_NOT_FOUND,
  PRODUCT_NOT_FOUND,
} from "../utils/constants.js";

class ProductService implements IProductService {
  async getProducts(): Promise<AllProducts[]> {
    const products = await productRepository.getProducts();

    return products;
  }

  async addProduct(
    productData: Omit<Product, "id" | "createdAt">
  ): Promise<Product> {
    const { categoryId } = productData;

    const searchedCategoryId =
      await productCategoryRepository.getProductCategoryId(categoryId);

    if (!searchedCategoryId) throw new Error(PRODUCT_CATEGORY_NOT_FOUND);

    const addedProduct = await productRepository.addProduct(productData);

    return addedProduct;
  }

  async editProduct(productData: Omit<Product, "createdAt">): Promise<Product> {
    const { categoryId, id } = productData;

    const searchedProductId = await productRepository.getProductId(id);

    if (!searchedProductId) throw new Error(PRODUCT_NOT_FOUND);

    const searchedCategoryId =
      await productCategoryRepository.getProductCategoryId(categoryId);

    if (!searchedCategoryId) throw new Error(PRODUCT_CATEGORY_NOT_FOUND);

    const editedProduct = await productRepository.editProduct(productData);

    return editedProduct;
  }
}

const productService = new ProductService();

export default productService;

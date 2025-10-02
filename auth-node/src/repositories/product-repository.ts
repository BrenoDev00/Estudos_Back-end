import { Product } from "@prisma/client";
import { prisma } from "../config/prisma-client.js";
import { AllProducts } from "../types/all-products.type.js";
import { IProductRepository } from "../types/repositories/product-repository.type.js";

class ProductRepository implements IProductRepository {
  async getProducts(): Promise<AllProducts[]> {
    const products = await prisma.product.findMany({
      omit: {
        categoryId: true,
        createdAt: true,
      },
      include: {
        category: true,
      },
    });

    return products;
  }

  async addProduct(
    productData: Omit<Product, "id" | "createdAt">
  ): Promise<Product> {
    const product = await prisma.product.create({
      data: productData,
    });

    return product;
  }
}

const productRepository = new ProductRepository();

export default productRepository;

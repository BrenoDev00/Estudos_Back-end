import { Product } from "@prisma/client";
import { prisma } from "../config/prisma-client.js";
import { AllProducts } from "../types/all-products.type.js";
import { IProductRepository } from "../types/repositories/product-repository.type.js";

class ProductRepository implements IProductRepository {
  async getProductId(id: string): Promise<{ id: string } | null> {
    const productId = await prisma.product.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
      },
    });

    return productId;
  }

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
    const addedProduct = await prisma.product.create({
      data: productData,
    });

    return addedProduct;
  }

  async editProduct(productData: Omit<Product, "createdAt">): Promise<Product> {
    const { id } = productData;

    const editedProduct = await prisma.product.update({
      where: {
        id: id,
      },
      data: productData,
    });

    return editedProduct;
  }
}

const productRepository = new ProductRepository();

export default productRepository;

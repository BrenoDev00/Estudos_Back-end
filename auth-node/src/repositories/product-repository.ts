import { Product } from "@prisma/client";
import { prisma } from "../config/prisma-client.js";
import { IProductRepository } from "../types/repositories/product-repository.type.js";
import { ProductWithCategoryId } from "../types/product-with-category-id.type.js";

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

  async getProducts(): Promise<ProductWithCategoryId[]> {
    const products = await prisma.product.findMany({
      omit: {
        createdAt: true,
      },
      include: {
        categoriesOnProducts: {
          select: {
            categoryId: true,
          },
        },
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

  async deleteProduct(productId: string): Promise<void> {
    await prisma.product.delete({
      where: {
        id: productId,
      },
    });
  }
}

const productRepository = new ProductRepository();

export default productRepository;

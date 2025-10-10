import { ICategoriesOnProductsRepository } from "../types/repositories/categories-on-products.type.js";
import { prisma } from "../config/prisma-client.js";

class CategoriesOnProducts implements ICategoriesOnProductsRepository {
  async addCategoryOnProduct(
    categoryId: string,
    productId: string
  ): Promise<void> {
    await prisma.categoriesOnProducts.create({
      data: {
        categoryId: categoryId,
        productId: productId,
      },
    });
  }
}

const categoriesOnProducts = new CategoriesOnProducts();

export default categoriesOnProducts;

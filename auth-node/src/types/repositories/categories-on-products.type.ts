export interface ICategoriesOnProductsRepository {
  addCategoryOnProduct(categoryId: string, productId: string): Promise<void>;
}

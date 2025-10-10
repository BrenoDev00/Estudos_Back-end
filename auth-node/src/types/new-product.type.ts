import { Product } from "@prisma/client";

export interface NewProduct extends Product {
  productCategoriesId: string[];
}

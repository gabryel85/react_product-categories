import { CategoryType } from '../CategoryCard';

export interface ProductType {
  id: number;
  name: string;
  categoryId: number;
}

export interface ProductItemType {
  item: ProductType;
  className: string;
  category: string;
}

export interface ProductsProps {
  items: ProductType[],
  categories: CategoryType[]
}

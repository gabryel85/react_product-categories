import { FC } from 'react';
import { CategoryItemType } from './CategoryCard.type';

export const CategoryItem:FC<CategoryItemType> = ({ item, className }) => (
  <li className={className}>{item.title}</li>
);

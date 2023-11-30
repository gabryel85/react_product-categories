import { FC } from 'react';
import { ProductItemType } from './Products.type';
import Badge from '../Badge';

export const ProductItem:FC<ProductItemType> = ({
  item,
  className,
  category,
}) => (
  <li className={className}>
    <p>
      {item.name}
      {' '}
      <Badge name={category} />
    </p>
  </li>
);

import React from 'react';
import { ProductItem } from './ProductItem';

export const ProductList = ({ products }) => (
  <ul className="ui list">
    {products.map(product => (
      <ProductItem product={product} key={product.id} />
    ))}
  </ul>
);

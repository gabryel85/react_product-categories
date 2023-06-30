import React from 'react';
import { ProductList } from './ProductList';

export const CategoryCard = ({ category }) => (
  <div className="ui card">
    <div className="ui content">
      <div className="ui description">
        {category.owner && (
          <p>{`${category.title} - (${category.owner.name})`}</p>
        )}

        {(category.products.length === 0) ? (
          <b>No products</b>
        ) : (
          <ProductList products={category.products} />
        )}
      </div>
    </div>
  </div>
);

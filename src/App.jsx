import React from 'react';
import './App.scss';

import usersFromServer from './api/users';
import productsFromServer from './api/products';
import categoriesFromServer from './api/categories';
import { CategoryCard } from './components/CategoryCard';

function getUserById(id) {
  const foundUser = usersFromServer.find(
    user => user.id === id,
  );

  return foundUser || null;
}

function getProductsByCategoryId(categoryId) {
  return productsFromServer.filter(
    product => product.categoryId === categoryId,
  );
}

const categories = categoriesFromServer.map(category => ({
  ...category,
  owner: getUserById(category.ownerId),
  products: getProductsByCategoryId(category.id),
}));

export const App = () => (
  <div className="container">
    {categories.map(category => (
      <CategoryCard
        key={category.id}
        category={category}
      />
    ))}
  </div>
);

import React from 'react';
import './App.scss';

import CategoryCard from './components/CategoryCard';

// import usersFromServer from './api/users';
import productsFromServer from './api/products';
import categoriesFromServer from './api/categories';
import Products from './components/Products';

export const App: React.FC = () => (
  <div className="container">
    <div className="ui card">
      <div className="ui content">
        <div className="ui description">
          <p>Grocery - (Anna)</p>
          <CategoryCard items={categoriesFromServer} />
        </div>
      </div>
    </div>

    <div className="ui card">
      <div className="ui content">
        <div className="ui description">
          <p>Electronics - (Roma)</p>
          <Products
            items={productsFromServer}
            categories={categoriesFromServer}
          />
        </div>
      </div>
    </div>
  </div>
);

import { FC } from 'react';
import styles from './Products.module.scss';
import { ProductsProps } from './Products.type';
import { NoProducts } from './NoProducts';
import { ProductItem } from './ProductItem';

const Products: FC<ProductsProps> = ({
  items,
  categories = [],
}: ProductsProps) => {
  if (!items?.length) {
    return <NoProducts />;
  }

  return (
    <ul className={styles.ul}>
      {items.map((item) => {
        const categoryName: string = categories
          .find(category => category.id === item.id)?.title || '';

        return (
          <ProductItem
            className={styles.list}
            key={item.id}
            item={item}
            category={categoryName}
          />
        );
      })}
    </ul>
  );
};

export default Products;

import { FC } from 'react';
import styles from './CategoryCard.module.scss';
import { CategoryCardProps } from './CategoryCard.type';
import { EmptyCard } from './EmptyCard';
import { CategoryItem } from './CategoryItem';

const CategoryCard: FC<CategoryCardProps> = ({ items }: CategoryCardProps) => {
  if (!items?.length) {
    return <EmptyCard />;
  }

  return (
    <ul className={styles.ul}>
      {items.map((item) => (
        <CategoryItem className={styles.list} key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CategoryCard;

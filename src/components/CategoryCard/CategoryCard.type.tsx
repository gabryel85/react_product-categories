export interface CategoryType {
  id: number;
  title: string;
  ownerId: number;
}

export interface CategoryItemType {
  item: CategoryType;
  className: string;
}

export interface CategoryCardProps {
  items: CategoryType[]
}

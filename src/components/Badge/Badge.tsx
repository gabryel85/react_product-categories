import { FC } from 'react';

type Props = {
  name: string
};

const Badge:FC<Props> = ({ name }) => (
  <b>{name}</b>
);

export default Badge;

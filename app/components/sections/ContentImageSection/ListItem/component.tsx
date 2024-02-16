'use client';

import { useTranslation } from 'react-i18next';
import { ListItemProps } from './component.types';
import { BsCheck2 } from 'react-icons/bs';

const ListItem: React.FC<ListItemProps> = (props) => {
  const { t } = useTranslation();

  return (
    <li className="flex gap-2 text-base font-light text-neutral-300 first:mt-4 lg:text-md">
      <BsCheck2 className="h-8 w-8 fill-primary-100" />
      <p>{t(`${props.content}.${props.index}`)}</p>
    </li>
  );
};

export default ListItem;

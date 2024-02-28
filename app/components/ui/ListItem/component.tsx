import { ListItemProps } from './index';
import { BsCheck2 } from 'react-icons/bs';
import Link from 'next/link';

const ListItem: React.FC<ListItemProps> = (props) => {
  return (
    <li className="flex gap-2 first:mt-4 last:mb-4">
      <BsCheck2 className="h-8 w-8  shrink-0 fill-primary-100" />
      <span>
        {props.href && (
          <Link href={props.href} data-testid="list-item-link">
            {props.linkText}
          </Link>
        )}{' '}
        {props.content}
      </span>
    </li>
  );
};

export default ListItem;

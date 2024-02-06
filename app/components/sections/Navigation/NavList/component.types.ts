import { i18n } from 'i18next';

type NavListProps = {
  i18n: i18n;
  lng: string;
  isOpen: boolean;
  handleNav: React.MouseEventHandler<HTMLElement>;
};

export type { NavListProps };

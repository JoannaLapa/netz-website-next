import { UrlObject } from 'url';

type ButtonProps = {
  title: string;
  link?: LinkProps;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'button' | 'reset';
};

type LinkProps = {
  href: string | UrlObject;
};

export type { ButtonProps };

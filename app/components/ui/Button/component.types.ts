import { UrlObject } from 'url';

type ButtonProps = {
  title: string;
  link?: LinkProps;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'button' | 'reset';
  styles?: string;
  variant: 'primary' | 'danger';
};

type LinkProps = {
  href: string | UrlObject;
};

export type { ButtonProps, LinkProps };

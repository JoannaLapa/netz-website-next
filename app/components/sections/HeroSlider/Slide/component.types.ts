import { LinkProps } from '../../../ui/Button/index';

type SlideProps = {
  tag: 'h1' | 'h2';
  title: string;
  decorator: string;
  buttonTitle?: string;
  visible: boolean;
  link?: LinkProps;
  lng: string;
};

export type { SlideProps };

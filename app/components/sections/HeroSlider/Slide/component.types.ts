import { LinkProps } from '../../../ui/Button/index';

type SlideProps = {
  tag: 'h1' | 'p';
  title: string;
  decorator: string;
  buttonTitle?: string;
  visible: boolean;
  link?: LinkProps;
};

export type { SlideProps };

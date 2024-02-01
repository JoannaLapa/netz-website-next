type WrapperProps = {
  children: React.ReactNode;
  element: 'div' | 'section';
  variant: 'section' | 'sectionBig';
  className?: string;
  padding?: boolean;
  id?: string;
};

export type { WrapperProps };

import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const Wrapper = cva('relative h-full w-full', {
  variants: {
    variant: {
      section: 'px-[10%]',
      sectionBig: '',
    },
    padding: {
      true: 'py-9 md:py-[80px]',
      false: '',
    },
  },
});

type WrapperProps = VariantProps<typeof Wrapper> & { className?: string };

const StylesWrapper = (props: WrapperProps) =>
  twMerge(Wrapper({ ...props, className: props.className ?? '' }));

export { StylesWrapper };

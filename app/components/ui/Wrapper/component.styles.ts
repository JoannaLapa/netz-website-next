import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const Wrapper = cva('relative mx-5 h-full w-full', {
  variants: {
    variant: {
      section: 'px-[10%]',
      sectionBig: '',
    },
    padding: {
      true: 'py-9',
      false: '',
    },
  },
});

type WrapperProps = VariantProps<typeof Wrapper> & { className?: string };

const StylesWrapper = (props: WrapperProps) =>
  twMerge(Wrapper({ ...props, className: props.className ?? '' }));

export { StylesWrapper };

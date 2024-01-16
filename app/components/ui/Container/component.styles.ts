import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const Container = cva('', {
  variants: {
    variant: {
      section: 'mx-auto w-full max-w-full md:max-w-[770px] xl:max-w-[1216px]',
      sectionBig:
        'mx-auto w-full max-w-full md:max-w-[976px] xl:max-w-[1520px]',
    },
  },
});

type ContainerProps = VariantProps<typeof Container> & { className?: string };

const StylesContainer = (props: ContainerProps) =>
  twMerge(Container({ ...props, className: props.className ?? '' }));

export { StylesContainer };

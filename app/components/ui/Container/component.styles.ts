import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const Container = cva('', {
  variants: {
    variant: {
      sectionSmall:
        'mx-auto w-full max-w-full sm:max-w-[640px] md:max-w-[800px]',
      section: 'mx-auto w-full max-w-full sm:max-w-[770px] md:max-w-[1216px]',
      sectionBig:
        'mx-auto w-full max-w-full sm:max-w-[976px] xl:max-w-[1520px]',
    },
  },
});

type ContainerProps = VariantProps<typeof Container> & { className?: string };

const StylesContainer = (props: ContainerProps) =>
  twMerge(Container({ ...props, className: props.className ?? '' }));

export { StylesContainer };

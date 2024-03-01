/* eslint-disable tailwindcss/no-custom-classname */
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const Button = cva(
  'relative flex min-h-12 max-w-fit cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 px-10 py-3 text-base font-semibold transition duration-300 after:absolute after:left-[-4.6875rem] after:top-[-3.125rem] after:z-[-10] after:h-[9.6875rem] after:w-[3.125rem] after:rotate-[35deg] after:bg-primary-200 after:opacity-5 after:transition after:duration-700 hover:after:translate-x-[700%]',
  {
    variants: {
      variant: {
        primary: 'border-primary-100 focus:border-primary-200',
        danger: 'border-danger-100 focus:border-danger-200',
      },
    },
  },
);

type ButtonProps = VariantProps<typeof Button> & { className?: string };

const StylesButton = (props: ButtonProps) =>
  twMerge(Button({ ...props, className: props.className ?? '' }));

export { StylesButton };

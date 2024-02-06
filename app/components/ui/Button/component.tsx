import { ButtonProps } from './index';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const className =
  'relative rounded-full py-3 text-base font-semibold px-10 cursor-pointer max-w-fit overflow-hidden hover:border-primary-200 border-primary-100 border-2 focus:border-primary-200 after:absolute after:left-[-75px] after:top-[-50px] after:z-[-10] after:h-[155px] after:w-[50px] after:rotate-[35deg] after:bg-primary-200 after:opacity-10 hover:after:translate-x-[700%] after:transition after:duration-700 transition duration-300';
const Button: React.FC<ButtonProps> = (props) => {
  if (props.link) {
    return (
      <Link
        href={props.link.href}
        className={`${twMerge(className, props.styles)}`}
      >
        {props.title}
      </Link>
    );
  }

  return (
    <button
      className={`${twMerge(className, props.styles)}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.title}
    </button>
  );
};

export default Button;

import { ButtonProps } from './index';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const className =
  'hover:border-primary-200 rounded-full border-2 border-primary-100 py-3 text-base font-semibold transition duration-300 focus:border-neutral-400 px-10 cursor-pointer max-w-fit';
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

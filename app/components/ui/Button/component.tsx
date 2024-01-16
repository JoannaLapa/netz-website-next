/* eslint-disable tailwindcss/no-custom-classname */
import { ButtonProps } from './component.types';
import Link from 'next/link';

const className = "hover:border-primary-030  rounded-full border-2 border-primary-100 px-7 py-3 text-base font-semibold transition duration-300 focus:border-neutral-400"
const Button: React.FC<ButtonProps> = (props) => {
  if (props.link) {
    return <Link href={props.link.href} className={className} aria-label={props.link.ariaLabel}>{props.title}</Link>;
  }

  return (
    <button className={className} onClick={props.onClick} type={props.type}>
      {props.title}
    </button>
  );
};

export default Button;

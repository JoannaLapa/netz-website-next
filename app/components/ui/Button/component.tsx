/* eslint-disable tailwindcss/no-custom-classname */
import { ButtonProps } from './component.types';

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className="border-primary-100  hover:border-primary-030 rounded-full border-2 px-7 py-3 text-base font-semibold transition duration-300 focus:border-neutral-400">
      {props.title}
    </button>
  );
};

export default Button;

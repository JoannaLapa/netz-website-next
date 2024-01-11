/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ButtonProps } from './component.types';

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.handleClick}
      className="flex w-full items-center justify-between gap-6 rounded-sm px-2 text-base uppercase leading-6 focus:border focus:border-dotted focus:border-primary-100"
    >
      <span>{props.lng}</span>
      <motion.span
        key={props.isOpen ? 'chevron_up' : 'chevron_down'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {props.isOpen ? (
          <Image
            src="/assets/chevron_up.svg"
            alt="chevron up"
            width={12}
            height={12}
          />
        ) : (
          <Image
            src="/assets/chevron_down.svg"
            alt="chevron down"
            width={12}
            height={12}
          />
        )}
      </motion.span>
    </button>
  );
};

export default Button;

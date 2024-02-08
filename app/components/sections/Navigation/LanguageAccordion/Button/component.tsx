import Image from 'next/image';
import { motion } from 'framer-motion';
import { ButtonProps } from './component.types';

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.handleClick}
      className="mt-1 flex w-full items-center justify-between gap-2 rounded-sm border border-neutral-000 p-1 text-lg font-light uppercase leading-6 focus:border-primary-100 sm:p-2 sm:text-sm sm:font-normal md:gap-6 md:text-md"
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

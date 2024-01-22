/* eslint-disable tailwindcss/no-custom-classname */
import { AccordionListProps } from './component.types';
import Link from 'next/link';
import { languages } from '../../../../../i18n/settings';
import { motion } from 'framer-motion';

const variantsUl = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
      delayChildren: 1,
    },
  },
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const AccordionList: React.FC<AccordionListProps> = (props) => {
  return (
    <motion.ul
      className="flex flex-col gap-2 rounded-lg border-neutral-200 bg-white p-1 pt-4 shadow-sm sm:absolute sm:top-[52px] sm:p-2 sm:pt-5"
      variants={variantsUl}
      initial="closed"
      animate={props.isOpen ? 'open' : 'closed'}
    >
      {languages
        .filter((l) => props.lng !== l)
        .map((l) => (
          <motion.li
            key={l}
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="p-1"
          >
            <Link
              href={`/${l}`}
              className="sm:text-md pl-8 text-base uppercase leading-6"
            >
              {l}
            </Link>
          </motion.li>
        ))}
    </motion.ul>
  );
};

export default AccordionList;

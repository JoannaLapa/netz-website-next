/* eslint-disable tailwindcss/no-custom-classname */
import * as React from 'react';
import { motion } from 'framer-motion';
import { NavItemProps } from './component.types';

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

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <>
      <motion.li
        className="m-0 mb-5 flex cursor-pointer items-center p-4 text-base leading-6 md:hidden"
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        {props.title}
      </motion.li>

      <li className="md:hover:text-primary-100 border-neutral-250 md:text-md m-0 mb-5 hidden cursor-pointer items-center border-r px-4 md:mb-0 md:flex md:transition md:duration-300">
        {props.title}
      </li>
    </>
  );
};

export default NavItem;

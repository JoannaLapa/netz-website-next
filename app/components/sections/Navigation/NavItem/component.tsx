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
        className="m-0 mb-5 flex cursor-pointer items-center p-4 text-base leading-6 sm:hidden"
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        {props.title}
      </motion.li>

      <li className="m-0 mb-5 hidden cursor-pointer items-center border-r border-neutral-250 px-4 sm:mb-0 sm:flex sm:text-sm sm:transition sm:duration-300 sm:hover:text-primary-100 md:text-md">
        {props.title}
      </li>
    </>
  );
};

export default NavItem;

'use client';

import * as React from 'react';
import { motion, useCycle } from 'framer-motion';
import NavList from './NavList/component';
import MenuToggle from './MenuToggle/component';
import { NavigationProps } from './index';
import { useTranslation } from '../../../i18n/client';
const sidebar = {
  open: {
    clipPath: `circle(180% at 100% 0)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(3% at 100% 0)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navigation: React.FC<NavigationProps> = (props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { i18n } = useTranslation(props.lng, 'translation');

  return (
    <nav className="flex gap-4 sm:w-fit sm:gap-1">
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className="absolute inset-y-0 right-0 z-20 w-full sm:static"
      >
        <NavList
          isOpen={isOpen}
          i18n={i18n}
          lng={props.lng}
          handleNav={() => toggleOpen()}
        />
        <motion.div
          className="
            fixed right-0 top-0 z-20 h-screen w-screen overflow-hidden bg-neutral-100 p-10"
          variants={sidebar}
        />
        <MenuToggle handleNav={() => toggleOpen()} />
      </motion.div>
    </nav>
  );
};

export default Navigation;

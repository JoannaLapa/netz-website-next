import * as React from 'react';
import { motion } from 'framer-motion';
import NavItem from '../NavItem/component';
import LanguageAccordion from '../LanguageAccordion/component';
import { NavListProps } from './component.types';
const titles = ['aboutUs', 'offer', 'fleet', 'contact'] as const;

const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};
const NavList: React.FC<NavListProps> = (props) => {
  const t = props.i18n.getFixedT(props.lng, 'translation');
  return (
    <>
      {props.isOpen && (
        <motion.ul
          variants={variants}
          initial="closed"
          animate={props.isOpen ? 'open' : 'closed'}
          className="absolute top-[100px] z-30 w-[230px] p-10 sm:hidden"
        >
          {titles.map((title) => (
            <NavItem key={title} title={t(title)} />
          ))}
          <LanguageAccordion lng={props.lng} />
        </motion.ul>
      )}

      {/* Tablet and larger view */}
      <ul className="hidden gap-4 sm:grid sm:grid-cols-5 sm:items-center sm:justify-center">
        {titles.map((title) => (
          <NavItem key={title} title={t(title)} />
        ))}
        <LanguageAccordion lng={props.lng} />
      </ul>
    </>
  );
};

export default NavList;

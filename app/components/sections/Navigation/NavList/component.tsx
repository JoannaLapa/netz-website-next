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
      <motion.ul
        variants={variants}
        className="absolute top-[100px] z-20 w-[230px] p-10 lg:hidden"
      >
        {titles.map((title) => (
          <NavItem key={title} title={t(title)} />
        ))}
        <LanguageAccordion lng={props.lng} />
      </motion.ul>

      {/* Tablet and larger view */}
      <div className="hidden gap-4 lg:flex">
        {titles.map((title) => (
          <NavItem key={title} title={t(title)} />
        ))}
        <LanguageAccordion lng={props.lng} />
      </div>
    </>
  );
};

export default NavList;

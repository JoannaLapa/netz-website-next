import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import NavItem from '../NavItem/component';
import LanguageAccordion from '../LanguageAccordion/component';
import { NavListProps } from './component.types';
import MenuToggle from '../MenuToggle/component';

const titles = ['aboutUs', 'offer', 'fleet', 'contact'] as const;

const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};
const NavList = forwardRef<HTMLDialogElement, NavListProps>((props, ref) => {
  const t = props.i18n.getFixedT(props.lng, 'translation');
  
  return (
    <>
      <dialog
        ref={ref}
        className="flex flex-col justify-start backdrop:bg-transparent sm:hidden"
      >
        <MenuToggle handleNav={props.handleNav} />
        {props.isOpen && (
          <motion.ul
            variants={variants}
            initial="closed"
            animate={props.isOpen ? 'open' : 'closed'}
            className="fixed left-0 top-[50px] z-30 w-[230px] p-10 sm:hidden"
          >
            {titles.map((title) => (
              <NavItem
                key={title}
                title={t(title)}
                href={`#${title}`}
                handleNav={props.handleNav}
              />
            ))}
            <LanguageAccordion lng={props.lng} />
          </motion.ul>
        )}
      </dialog>

      {/* Tablet and larger view */}
      <ul className="ml-2 hidden gap-4 sm:grid sm:grid-cols-5 sm:items-center sm:justify-center">
        {titles.map((title) => (
          <NavItem
            key={title}
            title={t(title)}
            href={`#${title}`}
            handleNav={props.handleNav}
          />
        ))}
        <LanguageAccordion lng={props.lng} />
      </ul>
    </>
  );
});

NavList.displayName = 'NavList';
export default NavList;

import * as React from 'react';
import { SVGMotionProps, motion } from 'framer-motion';
import { MenuToggleProps } from './component.types';

const Path = (
  props: React.JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>,
) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle: React.FC<MenuToggleProps> = (props) => (
  <button
    onClick={props.handleNav}
    className="fixed right-[10%] top-5
     z-30 flex h-[44px] w-[44px] cursor-pointer items-center justify-center bg-transparent sm:hidden"
    aria-label="Menu"
  >
    <svg width="23" height="23" viewBox="0 0 23 23" aria-hidden="true">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);

export default MenuToggle;

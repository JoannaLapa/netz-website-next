'use client';

import { HeadingAnimatedProps } from './component.types';
import { motion } from 'framer-motion';

const HeadingAnimated: React.FC<HeadingAnimatedProps> = (props) => {
  return (
    <motion.h2
      className={`mb-9 text-xl font-light sm:text-2xl lg:text-[64px] ${props.className ? props.className : ''}`}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {props.accentPosition === 'left' ? (
        <>
          <span className="font-medium">{props.accentText}</span>
          {props.title}
        </>
      ) : (
        <>
          {props.title}
          <span className="font-medium">{props.accentText}</span>
        </>
      )}
    </motion.h2>
  );
};

export default HeadingAnimated;

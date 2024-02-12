'use client';

import { IconWithDescriptionBoxProps } from './component.types';
import { motion } from 'framer-motion';

const IconWithDescriptionBox: React.FC<IconWithDescriptionBoxProps> = (
  props,
) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-5 text-center"
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {props.children}
      <h4 className="max-w-[180px] text-md font-light text-neutral-400 sm:max-w-[220px] md:max-w-[340px] lg:text-lg">
        {props.title}
        <span className="font-medium">{props.accentText}</span>
      </h4>
    </motion.div>
  );
};

export default IconWithDescriptionBox;

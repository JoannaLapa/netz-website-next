'use client';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { NumberedBoxProps } from './component.types';
const NumberedBox: React.FC<NumberedBoxProps> = (props) => {
  const { t } = useTranslation();

  return (
    <motion.div className="relative min-h-[144px] xl:flex xl:gap-2 scale-100"
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5}}
    >
      <span className="absolute left-0 top-0 -z-10 font-robotoCondensed text-3xl font-bold text-neutral-200 opacity-80 xl:static xl:leading-normal">
        {props.decorator}
      </span>
      <div className="ml-[38px] mt-[42px] xl:ml-0 xl:mt-0">
        <h3 className=" font-robotoCondensed text-md font-bold text-neutral-400 lg:text-lg">
          {t(`numberedBoxes.${props.boxNr}.title`)}
        </h3>
        <p className="text-base font-light text-neutral-300 lg:text-md">
          {t(`numberedBoxes.${props.boxNr}.description`)}
        </p>
      </div>
    </motion.div>
  );
};

export default NumberedBox;

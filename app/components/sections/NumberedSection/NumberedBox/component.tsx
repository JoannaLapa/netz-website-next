/* eslint-disable tailwindcss/no-custom-classname */
'use client';
import { useTranslation } from 'react-i18next';

import { NumberedBoxProps } from './component.types';
const NumberedBox: React.FC<NumberedBoxProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-[144px]">
      <span className="font-robotoCondensed absolute left-0 top-0 -z-10 text-3xl font-bold text-neutral-200 opacity-80">
        {props.decorator}
      </span>
      <div className="ml-[38px] mt-[42px]">
        <h3 className=" font-robotoCondensed text-md font-bold text-neutral-400 lg:text-lg">
          {t(`numberedBoxes.${props.boxNr}.title`)}
        </h3>
        <p className="text-base font-light text-neutral-300 lg:text-md">
          {t(`numberedBoxes.${props.boxNr}.description`)}
        </p>
      </div>
    </div>
  );
};

export default NumberedBox;
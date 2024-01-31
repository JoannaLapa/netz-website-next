/* eslint-disable tailwindcss/no-custom-classname */
'use client';

import { IconWithDescriptionBoxProps } from './component.types';
import { useTranslation } from 'react-i18next';
import Truck from '@/app/components/icons/Truck/Truck';

const IconWithDescriptionBox: React.FC<IconWithDescriptionBoxProps> = (
  props,
) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-center">
      {props.children}
      <h4 className="max-w-[180px] text-md font-light text-neutral-400 sm:max-w-[220px] lg:text-lg">
        {t(`boxes.${props.boxNr}.title`)}
        <span className="font-medium">
          {t(`boxes.${props.boxNr}.accentText`)}
        </span>
      </h4>
    </div>
  );
};

export default IconWithDescriptionBox;

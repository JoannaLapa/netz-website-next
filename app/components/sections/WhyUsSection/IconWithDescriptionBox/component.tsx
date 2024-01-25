'use client'

import Image from 'next/image';
import { IconWithDescriptionBoxProps } from './component.types';
import {useTranslation} from 'react-i18next';

const IconWithDescriptionBox: React.FC<IconWithDescriptionBoxProps> = (
  props,
) => {
const { t } = useTranslation();
  return <div className='flex flex-col items-center justify-center gap-5 text-center'>
    <Image src={props.src} alt="" aria-hidden="true" width={props.width} height={props.height}/>
    <h4 className='max-w-[180px] font-light'>{t(`boxes.${props.boxNr}.title`)}<span className='font-medium'>{t(`boxes.${props.boxNr}.accentText`)}</span></h4>
  </div>;
};

export default IconWithDescriptionBox;
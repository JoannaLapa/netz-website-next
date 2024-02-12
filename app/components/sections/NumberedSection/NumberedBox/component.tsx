import { useTranslation } from '../../../../i18n';
// import { motion } from 'framer-motion';

import { NumberedBoxProps } from './component.types';
const NumberedBox: React.FC<NumberedBoxProps> = async (props) => {
  const { t } = await useTranslation(props.lng);

  return (
    <div className="relative min-h-[144px] scale-100 xl:flex xl:gap-2">
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
    </div>
  );
};

export default NumberedBox;

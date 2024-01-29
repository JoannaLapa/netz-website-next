/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
/* eslint-disable tailwindcss/no-custom-classname */
import Button from '@/app/components/ui/Button';
import { SlideProps } from './component.types';

const Slide: React.FC<SlideProps> = (props) => {
  return (
    <div className="relative flex h-full min-h-[26.25rem] w-full flex-col gap-8 transition duration-500">
      <div className="relative mt-4 min-h-[15rem] max-w-[22.625rem] sm:min-h-[28.75rem] sm:max-w-[56.25rem] 2xl:max-w-full">
        <props.tag className="word-break mt-16 max-w-[16rem] whitespace-pre-line text-lg min-[390px]:text-xl sm:mt-7 sm:max-w-[32.5rem] sm:text-[3.5rem] md:text-3xl">
          {props.title}
        </props.tag>
        <span
          className={`text-neutral-150 font-robotoSlab absolute right-5 top-0 text-end text-[15.625rem] font-medium leading-[15.625rem] ${props.visible ? 'animate-change-opacity opacity-10' : 'opacity-0'} sm:text-[31.25rem] sm:leading-[23.75rem]`}
        >
          {props.decorator}
        </span>
      </div>

      {props.buttonTitle && (
        <Button
          title={props.buttonTitle}
          link={props.link}
          styles="mb-[6.25rem] sm:mb-[6.75rem]"
        />
      )}
    </div>
  );
};

export default Slide;

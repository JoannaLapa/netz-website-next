/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
/* eslint-disable tailwindcss/no-custom-classname */
import Button from '@/app/components/ui/Button';
import { SlideProps } from './component.types';

const Slide: React.FC<SlideProps> = (props) => {
  return (
    <div className="relative flex h-full min-h-[420px] w-full flex-col gap-8 bg-cover bg-center duration-500">
      <div className="relative min-h-[240px] max-w-[362px] sm:min-h-[460px] sm:max-w-full">
        <props.tag className="word-break mt-16 max-w-[256px] whitespace-pre-line text-lg min-[390px]:text-xl sm:mt-7 sm:max-w-[520px] sm:text-3xl">
          {props.title}
        </props.tag>
        <span className="text-neutral-150 font-robotoSlab absolute right-0 top-0 text-end text-[250px] font-medium leading-[250px] opacity-10 sm:text-[500px] sm:leading-[380px]">
          {props.decorator}
        </span>
      </div>

      {props.buttonTitle && (
        <Button title={props.buttonTitle} styles="mb-[100px] sm:mb-[108px]" />
      )}
    </div>
  );
};

export default Slide;

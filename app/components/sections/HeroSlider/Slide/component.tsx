/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
/* eslint-disable tailwindcss/no-custom-classname */
import Button from '@/app/components/ui/Button';
import { SlideProps } from './component.types';

const Slide: React.FC<SlideProps> = (props) => {
  return (
    <div className="relative flex h-full w-full flex-col gap-8 bg-cover bg-center duration-500">
      <div>
        <props.tag className="mt-12 text-2xl">{props.title}</props.tag>
        <span className="text-neutral-150 font-robotoSlab absolute -top-[50px] right-0 text-end text-[250px] font-bold opacity-10">
          {props.decorator}
        </span>
      </div>
      {props.buttonTitle && <Button title={props.buttonTitle} />}
    </div>
  );
};

export default Slide;

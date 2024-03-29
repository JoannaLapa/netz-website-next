import Button from '@/app/components/ui/Button';
import { SlideProps } from './component.types';

const Slide: React.FC<SlideProps> = (props) => {
  return (
    <div className="relative flex h-full min-h-svh w-full flex-col gap-16 transition duration-500 md:gap-8">
      <div className="relative mt-[10vh] min-h-[15rem] max-w-[22.625rem] sm:min-h-[400px] sm:max-w-[56.25rem] 2xl:max-w-full">
        <props.tag
          className={`mt-16 max-w-[16rem] whitespace-pre-line text-lg min-[390px]:text-xl sm:mt-7 sm:max-w-[32.5rem] sm:text-[52px] lg:text-3xl  ${
            props.visible ? 'animate-change-scale' : 'scale-95'
          }`}
        >
          {props.title}
        </props.tag>
        <span
          className={`text-neutral-150 absolute right-5 top-0 text-end font-robotoSlab text-[200px] font-medium leading-[15.625rem] min-[350px]:text-[15.625rem] ${
            props.visible ? 'animate-change-opacity opacity-10' : 'opacity-0'
          } sm:text-[31.25rem] sm:leading-[23.75rem]`}
        >
          {props.decorator}
        </span>
      </div>

      {props.buttonTitle && (
        <Button
          title={props.buttonTitle}
          link={props.link}
          styles="mb-[6.25rem] sm:mb-[6.75rem]"
          variant="primary"
        />
      )}
    </div>
  );
};

export default Slide;

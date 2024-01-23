import { HeadingProps } from './component.types';

const Heading: React.FC<HeadingProps> = (props) => {
  return (
    <h2 className='text-lg sm:text-xl lg:text-[64px]'>
      {props.title} <span className='font-medium'>{props.accentText}</span>
    </h2>
  );
};

export default Heading;

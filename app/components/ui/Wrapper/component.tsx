import { WrapperProps } from './index';
import { twMerge } from 'tailwind-merge';

const Wrapper: React.FC<WrapperProps> = (props) => {
  return (
    <props.element
      className={twMerge(
        'relative m-5 h-full w-full px-[10%] py-9',
        props.className,
      )}
    >
      {props.children}
    </props.element>
  );
};

export default Wrapper;

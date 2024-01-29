import { WrapperProps } from './index';
import { twMerge } from 'tailwind-merge';

const Wrapper: React.FC<WrapperProps> = (props) => {
  return (
    <props.element
      className={twMerge(
        `relative mx-5 h-full w-full px-[10%] ${props.padding && 'py-9'}`,
        props.className,
      )}
      id={props.id}
    >
      {props.children}
    </props.element>
  );
};

export default Wrapper;

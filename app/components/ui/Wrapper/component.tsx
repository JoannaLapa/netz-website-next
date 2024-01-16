import { WrapperProps } from './index';
import { twMerge } from 'tailwind-merge';

const Wrapper: React.FC<WrapperProps> = (props) => {
  return (
    <props.element
      className={twMerge('relative m-5 w-full px-6 lg:px-8', props.className)}
    >
      {props.children}
    </props.element>
  );
};

export default Wrapper;

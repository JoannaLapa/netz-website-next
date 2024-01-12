import { WrapperProps } from './component.types';
import { twMerge} from 'tailwind-merge'

const Wrapper: React.FC<WrapperProps> = (props) => {
  return (
    <props.element className={twMerge('relative m-5 px-6 lg:px-8 w-full', props.className)}>{props.children}</props.element>
  );
};

export default Wrapper;

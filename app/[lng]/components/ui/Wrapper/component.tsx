import { WrapperProps } from './index';
import { StylesWrapper } from './component.styles';

const Wrapper: React.FC<WrapperProps> = (props) => {
  return (
    <props.element
      className={StylesWrapper({
        variant: props.variant,
        className: props.className,
        padding: props.padding,
      })}
      id={props.id}
    >
      {props.children}
    </props.element>
  );
};

export default Wrapper;

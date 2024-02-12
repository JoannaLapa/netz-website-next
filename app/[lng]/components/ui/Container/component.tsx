import { ContainerProps } from './index';
import { StylesContainer } from './component.styles';

const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div
      className={StylesContainer({
        variant: props.variant,
        className: props.className,
      })}
    >
      {props.children}
    </div>
  );
};

export default Container;

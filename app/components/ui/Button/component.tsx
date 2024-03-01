import { ButtonProps } from './index';
import Link from 'next/link';
import { StylesButton } from './component.styles';

const Button: React.FC<ButtonProps> = (props) => {
  if (props.link) {
    return (
      <Link
        href={props.link.href}
        className={StylesButton({
          variant: props.variant,
          className: props.styles,
        })}
      >
        {props.title}
      </Link>
    );
  }

  return (
    <button
      className={StylesButton({
        variant: props.variant,
        className: props.styles,
      })}
      onClick={props.onClick}
      onSubmit={props.onSubmit}
      type={props.type}
    >
      {props.title}
    </button>
  );
};

export default Button;

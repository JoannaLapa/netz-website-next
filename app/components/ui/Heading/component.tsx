import { HeadingProps } from './component.types';

const Heading: React.FC<HeadingProps> = (props) => {
  return (
    <h2
      className={`mb-9 text-xl font-light sm:text-2xl lg:text-[64px] ${props.className ? props.className : ''}`}
    >
      {props.accentPosition === 'left' ? (
        <>
          <span className="font-medium">{props.accentText}</span>
          {props.title}
        </>
      ) : (
        <>
          {props.title}
          <span className="font-medium">{props.accentText}</span>
        </>
      )}
    </h2>
  );
};

export default Heading;

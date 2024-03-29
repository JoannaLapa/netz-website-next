import { HeadingWithContentProps } from './index';

const HeadingWithContent: React.FC<HeadingWithContentProps> = (props) => {
  const formattedContent = props.content
    ? props.content.replace(/\n/g, '<br/><br/>')
    : '';

  return (
    <div className="flex flex-col gap-6 py-5 lg:py-10">
      <h2 className="py-3 text-xl lg:text-2xl">{props.heading}</h2>
      {props.subheading && <h3 className="py-2 text-xl">{props.subheading}</h3>}
      {props.inShortText && <p className="">{props.inShortText}</p>}
      {props.content && (
        <p dangerouslySetInnerHTML={{ __html: formattedContent }} />
      )}
      {props.children}
    </div>
  );
};

export default HeadingWithContent;

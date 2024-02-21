import { BoldedContentBoxProps } from './component.types';
import { BsCheck2 } from 'react-icons/bs';

const BoldedContentBox: React.FC<BoldedContentBoxProps> = (props) => {
  const formattedContent = props.content.replace(/\n/g, '<br/><br/>');

  return (
    <div className={props.icon ? 'flex gap-2' : 'py-2'}>
      {props.icon && <BsCheck2 className="h-6 w-6 shrink-0 fill-primary-100" />}
      <p>
        <strong>{props.importantNotice}</strong>{' '}
        <span dangerouslySetInnerHTML={{ __html: formattedContent }} />
      </p>
    </div>
  );
};

export default BoldedContentBox;

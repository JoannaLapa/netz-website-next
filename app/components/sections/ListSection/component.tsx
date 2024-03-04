import Container from '../../ui/Container';
import HeadingAnimated from '../../ui/HeadingAnimated';
import Wrapper from '../../ui/Wrapper';
import ListItem from './ListItem/component';
import { ListSectionProps } from './component.types';

const ListSection: React.FC<ListSectionProps> = (props) => {
  const array = new Array(props.index).fill(0);

  return (
    <Wrapper
      element="section"
      className="py-9 md:py-0 md:pt-[94px]"
      variant="section"
    >
      <Container variant="section" className="flex flex-col">
        <HeadingAnimated
          title={props.title}
          accentText={props.accentText}
          accentPosition="left"
        />
        <strong>{props.listTitle}</strong>
        <ul className="flex flex-col gap-2 text-md font-bold text-neutral-400">
          {array.map((_, index) => (
            <ListItem key={index} content={props.content} index={index} />
          ))}
        </ul>
      </Container>
    </Wrapper>
  );
};

export default ListSection;

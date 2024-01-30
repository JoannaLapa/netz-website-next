/* eslint-disable tailwindcss/no-custom-classname */
'use client';

import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import Wrapper from '../../ui/Wrapper';
import ListItem from './ListItem/component';
import { ListSectionProps } from './component.types';

const ListSection: React.FC<ListSectionProps> = (props) => {
  const array = new Array(props.index).fill(0);

  return (
    <Wrapper element="section" padding>
      <Container variant="section" className="mt-20 flex flex-col gap-9">
        <Heading
          title={props.title}
          accentText={props.accentText}
          accentPosition="left"
        />
        <ul className="text-md flex flex-col gap-2 font-bold text-neutral-300">
          {props.listTitle}
          {array.map((_, index) => (
            <ListItem key={index} content={props.content} index={index} />
          ))}
        </ul>
      </Container>
    </Wrapper>
  );
};

export default ListSection;
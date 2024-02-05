import { ContentImageSectionProps } from './index';
import Wrapper from '../../ui/Wrapper';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import Image from 'next/image';
import ListItem from './ListItem/component';
const ContentImageSection: React.FC<ContentImageSectionProps> = (props) => {
  const array = new Array(props.index).fill(0);

  return (
    <>
      <Wrapper
        element="section"
        className="py-9 md:py-0 md:pt-9"
        id={props.id}
        variant="section"
      >
        <Container variant="section">
          <div className="min-w-full grid grid-cols-1 md:grid-cols-2 md:items-center md:gap-x-8 md:justify-between">
          
              <Heading
                title={props.title}
                accentText={props.accentText}
                accentPosition="left"
                className='md:col-span-2 justify-self-start'
              />

            <ul className="flex flex-col gap-2 text-md font-bold text-neutral-400 sm:mt-0 lg:max-w-full mb-9 lg:text-lg">
                {props.listTitle}
                {array.map((_, index) => (
                  <ListItem key={index} content={props.content} index={index} />
                ))}
              </ul>

              <div className="md:col-start-2">
                <Image
                  src="/assets/images/fleetx2.jpg"
                  width={800}
                  height={801}
                  alt={props.alt}
                  className="object-cover"
                />
              </div>
          </div>
        </Container>
      </Wrapper>
      <Image
        src="/assets/ornament_1.svg"
        width={130}
        height={211}
        alt=""
        aria-hidden="true"
        className="hidden md:block"
      />
    </>
  );
};

export default ContentImageSection;

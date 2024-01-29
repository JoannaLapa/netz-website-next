import Image from 'next/image';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import Wrapper from '../../ui/Wrapper';
import NumberedBox, { NumberedSectionProps } from './index';

const NumberedSection: React.FC<NumberedSectionProps> = (props) => {
  return (
    <>
      <Wrapper element="section" padding>
        <Container variant="section" className="mt-20">
          <Heading title={props.title} accentText={props.accentText} />

          <div className="mt-9 flex flex-col gap-4 md:flex-row">
            {props.numberedboxes.map((box, index) => {
              return (
                <NumberedBox
                  key={index}
                  decorator={`0${index + 1}`}
                  boxNr={index}
                />
              );
            })}
          </div>
        </Container>
      </Wrapper>
      <div className="relative -z-10 flex w-full justify-end">
        <Image
          src="/assets/ornament_2.svg"
          width={188}
          height={212}
          alt=""
          aria-hidden="true"
          className="absolute -top-32 right-0 hidden md:block"
        />
      </div>
    </>
  );
};

export default NumberedSection;

import Image from 'next/image';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import Wrapper from '../../ui/Wrapper';
import NumberedBox from './NumberedBox/component';
import { NumberedSectionProps } from './index';

const NumberedSection: React.FC<NumberedSectionProps> = (props) => {
  return (
    <>
      <Wrapper element="section" padding variant="section" id="offer">
        <Container variant="section">
          <Heading
            title={props.title}
            accentText={props.accentText}
            accentPosition="right"
          />

          <div className="flex flex-col gap-4 md:flex-row">
            {props.numberedBoxes.map((box, index) => {
              return (
                <NumberedBox key={box} decorator={`0${box}`} boxNr={index} lng={props.lng}/>
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
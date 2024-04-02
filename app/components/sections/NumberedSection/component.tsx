import Image from 'next/image';
import Container from '../../ui/Container';
import Wrapper from '../../ui/Wrapper';
import NumberedBox from './NumberedBox/component';
import { NumberedSectionProps } from './index';
import HeadingAnimated from '../../ui/HeadingAnimated';

const numberedBoxes = [1, 2, 3] as const;

const NumberedSection: React.FC<NumberedSectionProps> = (props) => {
  const t = props.i18n.getFixedT(props.lng, 'translation');
  return (
    <>
      <Wrapper element="section" padding variant="section" id="offer">
        <Container variant="section">
          <HeadingAnimated
            title={props.title}
            accentText={props.accentText}
            accentPosition="right"
          />

          <div className="flex flex-col gap-4 md:flex-row">
            {numberedBoxes.map((box, index) => {
              return (
                <NumberedBox
                  key={index}
                  decorator={`0${index + 1}`}
                  boxNr={index}
                  title={t(`numberedBox${box}Title`)}
                  description={t(`numberedBox${box}Description`)}
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

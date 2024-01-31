import Wrapper from '../../ui/Wrapper';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import Image from 'next/image';
import { WhyUsSectionProps } from './index';
import IconWithDescriptionBox from './IconWithDescriptionBox/component';
import Truck from '../../icons/Truck/Truck';
import Insurance from '../../icons/Truck/Insurance';
import Licences from '../../icons/Truck/Licences';

const currentYear = new Date().getFullYear();
const startYear = 2015;
const experience = currentYear - startYear;

const boxes = [
  {
    boxNr: 0,
    children: <Truck />,
  },
  {
    boxNr: 1,
    children: <Insurance />,
  },
  {
    boxNr: 2,
    children: <Licences />,
  },
];

const WhyUsSection: React.FC<WhyUsSectionProps> = (props) => {
  return (
    <Wrapper element="section" variant="section" className="py-9 md:py-0 md:pb-9">
      <Container variant="section">
        <Heading
          title={props.title}
          accentText={props.accentText}
          accentPosition="right"
        />
        <div className="mt-20 grid justify-center sm:grid-cols-2 sm:items-center">
          <div className="relative flex h-fit max-w-[246px] justify-center">
            <h3 className="font-robotoSlab p-8 text-center text-[200px] leading-[52px] text-neutral-400 sm:text-[250px] md:text-[300px]">
              {experience}
              <br />
              <span className="font-robotoCondensed text-md whitespace-nowrap leading-7 lg:text-[24px]">
                {props.experienceSuffix}
              </span>
            </h3>
            <Image
              src="/assets/grid_04.svg"
              width={483}
              height={120}
              alt=""
              aria-hidden="true"
              className="absolute top-[22%] max-w-[90%] -rotate-12"
            />
          </div>
          <div className="flex flex-col gap-8">
            {boxes.map((box) => (
              <IconWithDescriptionBox key={box.boxNr} {...box} />
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default WhyUsSection;

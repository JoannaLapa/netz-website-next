/* eslint-disable tailwindcss/no-custom-classname */
import Wrapper from '../../ui/Wrapper';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import Image from 'next/image';
import { WhyUsSectionProps } from './index';
import IconWithDescriptionBox from './IconWithDescriptionBox/component';

const currentYear = new Date().getFullYear();
const startYear = 2015;
const experience = currentYear - startYear;

const boxes = [
  {
    boxNr: 0,
    src: '/assets/grid_01.svg',
    width: 158,
    height: 71,
  },
  {
    boxNr: 1,
    src: '/assets/grid_02.svg',
    width: 61,
    height: 63,
  },
  {
    boxNr: 2,
    src: '/assets/grid_03.svg',
    width: 72,
    height: 71,
  },
];

const WhyUsSection: React.FC<WhyUsSectionProps> = (props) => {
  return (
    <Wrapper element="section" className='py-9'>
      <Container variant="section">
        <Heading title={props.title} accentText={props.accentText} />
        <div className='mt-20 grid'>
          <div className='relative flex h-fit justify-center'>
            <h3 className="font-robotoSlab p-8 text-[300px] leading-[52px] text-neutral-400">
              {experience} 
              <br /> 
              <span className='text-md font-robotoCondensed'>{props.experienceSuffix}</span>
            </h3>
            <Image
              src="/assets/grid_04.svg"
              width={483}
              height={120}
              alt=""
              aria-hidden="true"
              className='absolute top-[22%] max-w-[90%]'
            />
          </div>
          <div className='flex flex-col gap-8'>
            {boxes.map((box, index) => (
              <IconWithDescriptionBox key={box.src} {...box} />
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default WhyUsSection;

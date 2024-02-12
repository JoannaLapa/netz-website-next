import Wrapper from '../../ui/Wrapper';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import Image from 'next/image';
import { WhyUsSectionProps } from './index';
import IconWithDescriptionBox from './IconWithDescriptionBox/component';
import Truck from '../../icons/Truck/Truck';
import Insurance from '../../icons/Truck/Insurance';
import Licences from '../../icons/Truck/Licences';
import Counter from './Counter/component';

export const boxes = [
  {
    children: <Truck />,
    title: 'box1Title' as const,
    accentText: 'box1AccentText' as const,
  },
  {
    children: <Insurance />,
    title: 'box2Title' as const,
    accentText: 'box2AccentText' as const,
  },
  {
    children: <Licences />,
    title: 'box3Title' as const,
    accentText: 'box3AccentText' as const,
  },
];

const WhyUsSection: React.FC<WhyUsSectionProps> = (props) => {
  const t = props.i18n.getFixedT(props.lng, 'translation');
  return (
    <Wrapper
      element="section"
      variant="section"
      className="py-9 md:py-0 md:pb-[80px]"
    >
      <Container variant="section">
        <Heading
          title={props.title}
          accentText={props.accentText}
          accentPosition="right"
        />
        <div className="grid justify-center sm:grid-cols-2 sm:items-center">
          <div className="relative flex h-fit max-w-[246px] justify-center">
            <Counter experienceSuffix={props.experienceSuffix} />
            <Image
              src="/assets/grid_04.svg"
              width={483}
              height={120}
              alt=""
              aria-hidden="true"
              className="absolute top-[22%] max-w-[90%] -rotate-12 animate-rotate"
            />
          </div>
          <div className="flex flex-col gap-8">
            {boxes.map((box) => (
              <IconWithDescriptionBox
                key={box.title}
                {...box}
                title={t(box.title)}
                accentText={t(box.accentText)}
              />
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default WhyUsSection;

/* eslint-disable tailwindcss/no-custom-classname */
import { BoxImageSectionProps } from './index';
import Wrapper from '../../ui/Wrapper';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import Image from 'next/image';
const BoxImageSection: React.FC<BoxImageSectionProps> = (props) => {
  const formattedDescription = props.description.replace(/\n/g, '<br/><br/>');

  return (
    <>
    <Wrapper element="section" className="py-9 lg:py-0 lg:pt-9">
      <Container variant="section" className="mt-20">
        <div className="grid grid-cols-1 sm:mt-16 sm:grid-cols-2 sm:items-center sm:gap-16 md:justify-between">
          <div>
            <Heading title={props.title} accentText={props.accentText} />

            <p
              className="mt-9 max-w-[362px] text-base font-light text-neutral-400 sm:mt-8 sm:max-w-full sm:text-base lg:max-w-[500px] lg:text-[21px]"
              dangerouslySetInnerHTML={{ __html: formattedDescription }}
            />
          </div>

          <div className="relative mt-16 flex h-fit w-fit shrink-0 grow-0 flex-col gap-1 sm:mt-0 sm:items-start">
            <div className="mr-[12%] flex justify-end sm:mt-7">
              <div className="before:border-primary-100 relative max-w-[340px] before:absolute before:right-[-12%] before:top-[-12%] before:h-full before:w-full before:border-[3px] sm:max-w-[440px]">
                <Image
                  src="/assets/images/about-us.jpg"
                  width={880}
                  height={880}
                  alt={props.alt}
                  className="relative z-20 border border-neutral-400 object-cover"
                />
              </div>
            </div>

            <p className="pt-3 font-bold text-neutral-400">
              Anita Surma <span className="font-normal">CEO</span>
            </p>
          </div>
        </div>
      </Container>
    </Wrapper>
   <Image src="/assets/ornament_1.svg" width={130} height={211} alt="" aria-hidden="true" className='hidden lg:block'/>
    </>
  );
};

export default BoxImageSection;

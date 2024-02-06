import { BoxImageSectionProps } from './index';
import Wrapper from '../../ui/Wrapper';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import Image from 'next/image';
const BoxImageSection: React.FC<BoxImageSectionProps> = (props) => {
  const formattedDescription = props.description.replace(/\n/g, '<br/><br/>');

  return (
    <>
      <Wrapper
        element="section"
        className="py-9 md:py-0 md:pt-9"
        id={props.id}
        variant="section"
      >
        <Container variant="section">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:items-center sm:gap-x-12 md:justify-between">
            <Heading
              title={props.title}
              accentText={props.accentText}
              accentPosition="left"
              className="sm:col-span-2"
            />

            <p
              className="max-w-[362px] text-base font-light text-neutral-300 sm:col-start-1 sm:mt-0 sm:max-w-full sm:text-base lg:max-w-[500px] lg:text-[21px]"
              dangerouslySetInnerHTML={{ __html: formattedDescription }}
            />
            <div className="relative mt-16 flex h-fit w-fit shrink-0 grow-0 flex-col gap-1 sm:col-start-2 sm:mt-0 sm:items-start">
              <div className="mr-[12%] flex justify-end sm:mt-7">
                <div className="relative max-w-[340px] before:absolute before:right-[-12%] before:top-[-12%] before:h-full before:w-full before:border-[3px] before:border-primary-100 sm:max-w-[440px]">
                  <Image
                    src="/assets/images/ceo_photox2.jpg"
                    width={680}
                    height={680}
                    alt={props.alt}
                    className="relative z-20 object-cover"
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

export default BoxImageSection;

'use client';

import { motion } from 'framer-motion';
import { QuoteImageSectionProps } from './index';
import Wrapper from '../../ui/Wrapper';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import Image from 'next/image';

const QuoteImageSection: React.FC<QuoteImageSectionProps> = (props) => {
  const formattedDescription = props.description.replace(/\n/g, '<br/><br/>');

  return (
    <>
      <Wrapper
        element="section"
        className="py-9 md:py-0 md:pt-[94px]"
        id={props.id}
        variant="section"
      >
        <Container variant="section">
          <div className="grid grid-cols-1 items-center sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className="sm:col-span-2"
            >
              <Heading
                title={props.title}
                accentText={props.accentText}
                accentPosition="left"
              />
            </motion.div>
            <p
              className="text-base font-light text-neutral-300 sm:col-start-1 sm:text-base lg:text-[21px]"
              dangerouslySetInnerHTML={{ __html: formattedDescription }}
            />
            <div className="mt-9 flex h-fit w-fit shrink-0 grow-0 flex-col items-center justify-center gap-8 justify-self-center sm:mt-0">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                className="max-w-[340px]"
              >
                <Image
                  src="/assets/images/ceo_photo_x2.jpg"
                  width={680}
                  height={680}
                  alt={props.alt}
                  className="rounded-full object-cover"
                />
              </motion.div>

              <p className="font-bold text-neutral-400">
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

export default QuoteImageSection;

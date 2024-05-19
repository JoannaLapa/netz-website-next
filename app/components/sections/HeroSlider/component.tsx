'use client';

import { useState } from 'react';
import Container from '../../ui/Container';
import Wrapper from '../../ui/Wrapper';
import Slide from './Slide/component';
import { HeroSliderProps } from './index';
import { BsCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import { useTranslation } from '../../../i18n/client';

const slides = [
  ['slideTitle0', 'slideButtonTitle0'],
  ['slideTitle1', 'slideButtonTitle1'],
  ['slideTitle2', 'slideButtonTitle2'],
] as const;

const HeroSlider: React.FC<HeroSliderProps> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation(props.lng);
  return (
    <Wrapper element="div" variant="section" className="relative">
      <Container
        variant="section"
        className="flex h-screen min-h-svh flex-col items-center"
      >
        {/* todo: check if it works correctly when tab is used */}
        <Link
          href={props.skipLink}
          className="sr-only left-0 top-0 -z-50 border p-2 no-underline focus-visible:not-sr-only"
        >
          {props.skipLinkContent}
        </Link>

        <div className="flex w-full gap-3 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              className="h-full w-full min-w-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              key={index}
            >
              <Slide
                tag={index === 0 ? 'h1' : 'h2'}
                title={t(slide[0])}
                decorator={`0${index + 1}`}
                buttonTitle={t(slide[1])}
                visible={index === currentIndex}
                link={props.links[index]}
                lng={props.lng}
              />
            </div>
          ))}
        </div>

        <div className="absolute bottom-28 left-1/2 flex h-[64px] -translate-x-1/2 gap-4 md:bottom-32">
          {slides.map((slide, index) => {
            return (
              <button
                key={slide[0]}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide nr ${index + 1}`}
              >
                <BsCircleFill
                  className={`h-3 w-3 transition duration-300 hover:scale-125 ${
                    currentIndex === index
                      ? 'fill-primary-100'
                      : 'fill-neutral-200'
                  }`}
                  aria-hidden="true"
                  data-testid={`slide-${index + 1}`}
                />
              </button>
            );
          })}
        </div>
      </Container>
    </Wrapper>
  );
};

export default HeroSlider;

'use client';

import { useState } from 'react';
import Container from '../../ui/Container';
import Wrapper from '../../ui/Wrapper';
import Slide from './Slide/component';
import { HeroSliderProps } from './index';
import { BsCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const HeroSlider: React.FC<HeroSliderProps> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, i18n } = useTranslation();
  return (
    <Wrapper element="div" variant="section" className='h-lvh'>
      <Container variant="section" className="relative">
        {/* todo: check if it works correctly when tab is used */}
        <Link
          href={props.skipLink}
          className="sr-only left-0 top-0 -z-50 border p-2 no-underline focus-visible:not-sr-only"
        >
          {props.skipLinkContent}
        </Link>

        <div className="flex w-full gap-3 overflow-hidden">
          {props.slides.map((_, index) => (
            <div
              className="w-full min-w-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              key={index}
            >
              <Slide
                tag={index === 0 ? 'h1' : 'p'}
                title={t(`slideTitle${index}`)}
                decorator={`0${index + 1}`}
                buttonTitle={t(`slideButtonTitle${index}`)}
                visible={index === currentIndex}
                link={props.links[index]}
              />
            </div>
          ))}
        </div>

        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-4">
          {props.slides.map((slide, index) => {
            return (
              <button
                key={slide}
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

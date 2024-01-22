/* eslint-disable tailwindcss/no-custom-classname */
'use client';

import { useState } from 'react';
import Container from '../../ui/Container';
import Wrapper from '../../ui/Wrapper';
import Slide from './Slide/component';
import { HeroSliderProps } from './index';
import { BsCircleFill } from 'react-icons/bs';
import Link from 'next/link';

const HeroSlider: React.FC<HeroSliderProps> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    <Slide
      tag="h1"
      title={props.headingTitle}
      decorator="01"
      buttonTitle={props.buttonTitle}
      key="slide1"
    />,
    <Slide tag="p" title={props.subtitle1} decorator="02" key="slide2" buttonTitle={props.buttonTitle}

    />,
    <Slide tag="p" title={props.subtitle2} decorator="03" key="slide3" buttonTitle={props.buttonTitle}

    />,
  ];

  return (
    <Wrapper element="div">
      <Container variant="section" className="relative mt-[4.125rem]">
        {/* todo: check if it works correctly when tab is used */}
        <Link
          href="#after-image-slider-controls"
          className="sr-only left-0 top-0 -z-50 border p-2 no-underline focus-visible:not-sr-only"
        >
          {props.skipLink}
        </Link>

        {slides[currentIndex]}
        <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-4">
          {slides.map((_, index) => {
            return (
              <button key={index} onClick={() => setCurrentIndex(index)}>
                <BsCircleFill
                  className={`h-3 w-3 ${
                    currentIndex === index
                      ? 'fill-primary-100 '
                      : 'fill-neutral-200'
                  }`}
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

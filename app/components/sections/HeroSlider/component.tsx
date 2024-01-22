'use client';

import { useState } from 'react';
import Container from '../../ui/Container';
import Wrapper from '../../ui/Wrapper';
import Slide from './Slide/component';
import { HeroSliderProps } from './index';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Link from 'next/link';

const HeroSlider: React.FC<HeroSliderProps> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const prevSlide = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };
  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === slides.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

  const slides = [
    <Slide
      tag="h1"
      title={props.headingTitle}
      decorator="01"
      buttonTitle={props.buttonTitle}
      key="slide1"
    />,
    <Slide tag="p" title={props.subtitle1} decorator="02" key="slide2" />,
    <Slide tag="p" title={props.subtitle2} decorator="03" key="slide3" />,
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
        <div>
        {slides.map((slide, index) => {
         return <button key={index} onClick={() => setCurrentIndex(index)}>{index}</button>
        })}
        </div>
      </Container>
    </Wrapper>
  );
};

export default HeroSlider;
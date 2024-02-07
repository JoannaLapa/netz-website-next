'use client';

import { useRef } from 'react';
import { CounterProps } from './component.types';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';

const currentYear = new Date().getFullYear();
const startYear = 2015;
const experience = currentYear - startYear;

const Counter: React.FC<CounterProps> = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <h3
      className="p-10 text-center font-robotoSlab text-[200px] leading-[52px] text-neutral-400 sm:text-[250px] md:text-[300px]"
      ref={ref}
    >
      {isInView && (
        <CountUp start={0} end={experience} duration={1} delay={0.3} />
      )}
      <br />
      <span className="whitespace-nowrap font-robotoCondensed text-md leading-7 lg:text-[24px]">
        {props.experienceSuffix}
      </span>
    </h3>
  );
};

export default Counter;

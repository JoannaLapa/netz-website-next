import * as React from 'react';
import Image from 'next/image';
import Navigation from '../Navigation/component';
import { HeaderProps } from './component.types';
import Wrapper from '../../ui/Wrapper';

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="w-full lg:fixed lg:top-[60px] lg:min-h-[80px] lg:bg-white">
      <Wrapper className="flex items-center justify-between">
        <Image
          alt="Company logo Netz with green net"
          src="/assets/images/icon.png"
          width={176}
          height={65}
        />

        <Navigation lng={props.lng} />
      </Wrapper>
    </header>
  );
};

export default Header;

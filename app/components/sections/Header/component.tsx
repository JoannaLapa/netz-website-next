import * as React from 'react';
import Image from 'next/image';
import Navigation from '../Navigation/component';
import { HeaderProps } from './component.types';
import Wrapper from '../../ui/Wrapper';
import Container from '../../ui/Container';

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="relative z-50 w-full lg:fixed lg:top-[60px] lg:min-h-[80px] lg:bg-white">
      <Wrapper element="div">
        <Container
          variant="section"
          className="flex items-center justify-between"
        >
          <div className="max-w-[98px] xl:max-w-[176px]">
            <Image
              alt="Company logo Netz with green net"
              src="/assets/images/netz_x2.jpg"
              width={476}
              height={174}
            />
          </div>
          <Navigation lng={props.lng} />
        </Container>
      </Wrapper>
    </header>
  );
};

export default Header;

import * as React from 'react';
import Image from 'next/image';
import Navigation from '../Navigation/component';
import { HeaderProps } from './component.types';
import Wrapper from '../../ui/Wrapper';
import Container from '../../ui/Container';
import Link from 'next/link';

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="relative z-50 w-full lg:fixed lg:top-0 lg:min-h-[5rem] lg:bg-white">
      <Wrapper element="div" className="pt-5" variant="section">
        <Container
          variant="section"
          className="flex items-center justify-between"
        >
          <div className="max-w-[6.125rem] xl:max-w-[11rem]">
            <Link href={props.href}>
              <Image
                alt="Company logo Netz with green net"
                src="/assets/images/netz_x2.jpg"
                width={476}
                height={174}
              />
            </Link>
          </div>
          {props.nav && <Navigation lng={props.lng} />}
        </Container>
      </Wrapper>
    </header>
  );
};

export default Header;

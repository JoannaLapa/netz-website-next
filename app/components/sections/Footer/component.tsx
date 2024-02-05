import Image from 'next/image';
import Container from '../../ui/Container';
import Wrapper from '../../ui/Wrapper';
import { FooterProps } from './index';
import Link from 'next/link';

const data = new Date();
const year = data.getFullYear();

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <Wrapper element="footer" variant="sectionBig" className="pt-[80px" id="contact">
      <Wrapper element="div" variant="section">
        <Container variant="section">
          <Image
            alt={props.alt}
            src="/assets/images/netz_x2.jpg"
            width={476}
            height={174}
            className="mb-9 max-w-[120px] sm:max-w-[273px]"
          />
          <address className="grid gap-4 text-base sm:grid-cols-2">
            <div>
              <p>Anita Surma und Michael Szczerbak Netz GbR</p>
              <p>Im Weimer 8</p>
              <p>61137 Schöneck</p>
              <p>USt-IdNr: DE301900100</p>
              <p>St.-Nr.: 022 373 60145</p>
            </div>
            <div>
              <p>Tel.: +49 (0)6187 / 99 46 186 (Buchhaltung)</p>
              <p>Mobil: +49 (0)176 / 22 0 44 502 (24h)</p>
              <p>E-mail: anita.surma@direkt-netz.de</p>
            </div>
          </address>
        </Container>
      </Wrapper>
      <div className="relative h-4 w-full">
        <Image
          src="/assets/ornament_2.svg"
          alt="Ornament"
          width={188}
          height={212}
          className="absolute -bottom-16 -right-20 hidden md:block lg:right-0"
        />
      </div>
      <Wrapper element="div" variant="section">
        <Container
          variant="section"
          className="items center mt-10 flex w-full flex-col justify-center gap-1 py-2 text-center text-s"
        >
          <p className="text-center">
            {props.privacyInfo}
            <Link href="#" className="font-bold underline">
              {props.learnMore}
            </Link>
          </p>

          <p>
            © {year} Anita Surma und Michael Szczerbak Netz GbR All rights
            reserved.{' '}
            <Link href="https://www.linkedin.com/in/joanna-lapa-/">
              {props.realisation}{' '}
              <span className="font-bold underline">Joanna Łapa</span>
            </Link>
          </p>
        </Container>
      </Wrapper>
    </Wrapper>
  );
};

export default Footer;

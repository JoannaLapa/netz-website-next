import Image from 'next/image';
import Container from '../../ui/Container';
import Wrapper from '../../ui/Wrapper';
import { FooterProps } from './component.types';
import Link from 'next/link';

const data = new Date();
const year = data.getFullYear();

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <Wrapper element="div" variant="sectionBig" padding>
        <Wrapper element="footer" variant="section">
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
        <Image
          src="/assets/ornament_2.svg"
          alt="Ornament"
          width={188}
          height={212}
          className="absolute -bottom-5 right-0 hidden md:block lg:bottom-5"
        />
      </Wrapper>
      <Wrapper element="div" variant="section">
        <Container
          variant="section"
          className="items center mt-10 flex w-full flex-col justify-center gap-3 p-4"
        >
          <p className="w-fit text-center">
            {props.privacyInfo}
            <Link href="#" className="underline font-bold">
              {props.learnMore}
            </Link>
          </p>

          <p>
            © {year} Anita Surma und Michael Szczerbak Netz GbR All rights
            reserved.
          </p>
          <Link href="https://www.linkedin.com/in/joanna-lapa-/">
            {props.realisation} <span className="underline font-bold">Joanna Łapa</span>
          </Link>
        </Container>
      </Wrapper>
    </>
  );
};

export default Footer;

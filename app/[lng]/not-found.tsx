import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import Wrapper from '../components/ui/Wrapper';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <Wrapper
        element="div"
        variant="section"
        className="mb-12 flex h-screen justify-center xl:mb-0"
      >
        <Container
          variant="section"
          className="flex flex-col items-center justify-center"
        >
          <div className="flex w-full max-w-[800px] flex-col items-center gap-6 text-center md:gap-12">
            <h1 className="text-2xl">Whoops, That Page Is Gone!</h1>

            <p>
              We’re so sorry, this link is broken or the page may have been
              removed.
            </p>
            <div className="flex flex-col items-center justify-center md:flex-row">
              <Button
                variant="primary"
                link={{ href: '/' }}
                title="GO TO HOMEPAGE"
              />
            </div>
          </div>
        </Container>
      </Wrapper>
    </main>
  );
}

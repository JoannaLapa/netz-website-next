'use client';

import { useEffect } from 'react';
import Container from '../components/ui/Container';
import Wrapper from '../components/ui/Wrapper';
import Button from '../components/ui/Button';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
            <h1 className="text-2xl">Oops, something went wrong!</h1>

            <p>
              We apologize, but an unexpected error occurred. Please try again
              later.
            </p>
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
              <Button
                variant="primary"
                onClick={() => reset()}
                title="Try again"
              />
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

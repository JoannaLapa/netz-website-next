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
      <Wrapper element="div" variant="section" className="mb-12 xl:mb-0">
        <Container variant="section">
          <div className="flex justify-center rounded-xl rounded-br-none border-solid border-neutral-200 bg-black px-6 pb-[64px] pt-[40px] md:pb-[128px] md:pt-[88px]">
            <div className="flex w-full max-w-[800px] flex-col items-center gap-6 text-center md:gap-12">
              <h1 className="text-xl text-white">Whoops, That Page Is Gone!</h1>

              <p>
                We’re so sorry, this link is broken or the page may have been
                removed.
              </p>
              <div className="flex flex-col items-center justify-center md:flex-row">
                <Button
                  variant="primary"
                  onClick={() => reset()}
                  title="Try again"
                />
                <Link href="/">GO TO HOMEPAGE</Link>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </main>
  );
}

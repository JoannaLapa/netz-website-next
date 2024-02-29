'use client';

import { useCookies } from 'react-cookie';
import { useEffect, useState, useRef } from 'react';
import Button from '../../ui/Button';
import Link from 'next/link';
import { CookiesBannerProps } from './index';

const CookiesBanner: React.FC<CookiesBannerProps> = (props) => {
  const ref = useRef<HTMLDialogElement | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [cookies, setCookie] = useCookies(['cookieConsent', 'i18next']);

  useEffect(() => {
    const modalElement = ref.current;
    if (cookies.cookieConsent === undefined) {
      modalElement?.showModal();
      document.body.style.overflow = 'hidden';
      setShowBanner(true);
    }
  }, [cookies.cookieConsent, showBanner]);

  const handleCloseAcceptBanner = () => {
    setCookie('cookieConsent', 'accepted');
    setShowBanner(false);
    document.body.style.overflow = 'auto';
  };

  const handleCloseDeclineBanner = () => {
    setCookie('cookieConsent', 'declined');
    setShowBanner(false);
    document.body.style.overflow = 'auto';
  };
  return (
    <>
      {showBanner && (
        <dialog
          ref={ref}
          className="flex max-w-[600px] flex-col gap-8 rounded-xl p-8"
        >
          <p>
            {props.cookiesBannerContent}{' '}
            <Link href="/en/cookies" className="font-medium underline">
              {props.cookiesBannerLinkText}
            </Link>
          </p>
          <div className="flex gap-8">
            <Button
              title={props.cookiesBannerAcceptButton}
              onClick={handleCloseAcceptBanner}
            />
            <Button
              title={props.cookiesBannerDeclineButton}
              onClick={handleCloseDeclineBanner}
            />
          </div>
        </dialog>
      )}
    </>
  );
};

export default CookiesBanner;

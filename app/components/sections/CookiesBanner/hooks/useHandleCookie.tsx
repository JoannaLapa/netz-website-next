import { useCookies } from 'react-cookie';
import { useEffect, useState, useRef } from 'react';

const useHandleCookie = () => {
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

  return { showBanner, ref, handleCloseAcceptBanner, handleCloseDeclineBanner };
};

export default useHandleCookie;

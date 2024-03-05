'use client';

import useHandleCookie from './hooks/useHandleCookie';
import Button from '../../ui/Button';
import Link from 'next/link';
import { CookiesBannerProps } from './index';
import { motion, AnimatePresence } from 'framer-motion';

const CookiesBanner: React.FC<CookiesBannerProps> = (props) => {
  const { showBanner, ref, handleCloseAcceptBanner, handleCloseDeclineBanner } =
    useHandleCookie();

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.dialog
          ref={ref}
          className="mx-auto flex max-w-[80%] flex-col gap-8 rounded-xl p-8 md:max-w-[600px]"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          exit={{ opacity: 0 }}
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
              variant="primary"
            />
            <Button
              title={props.cookiesBannerDeclineButton}
              onClick={handleCloseDeclineBanner}
              variant="danger"
            />
          </div>
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};

export default CookiesBanner;

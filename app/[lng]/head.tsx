import { languages, fallbackLng } from '../i18n/settings';
import { useTranslation } from '../i18n';
import { headers } from 'next/headers';
import Script from 'next/script';

export default async function Head({
  params: { lng },
}: {
  params: { lng: string };
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng);
  const nonce = headers().get('x-nonce') || undefined;
  return (
    <>
     <Script
      src="https://www.googletagmanager.com/gtag/js"
      strategy="afterInteractive"
      nonce={nonce}
    />
      <title>{t('metaTitle')}</title>
      <meta name="description" content={t('content')} />
    </>
  );
}

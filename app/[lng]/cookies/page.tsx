import { languages, fallbackLng } from '../../i18n/settings';
import { useTranslation } from '../../i18n';
import Header from '@/app/components/sections/Header';
import Wrapper from '@/app/components/ui/Wrapper';
import Container from '@/app/components/ui/Container';
import HeadingWithContent from '@/app/components/ui/HeadingWithContent';
import ListItem from '@/app/components/ui/ListItem';

export default async function Page({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t, i18n } = await useTranslation(lng, 'cookiesPolicy');

  return (
    <>
      <Header lng={lng} homeLink={t('homeLink')} href={`/${lng}`} />
      <main className="pt-20 lg:pt-[120px]">
        <Wrapper element="div" variant="section">
          <Container variant="sectionSmall">
            <h1 className="text-2xl lg:text-3xl">{t('cookiesTitle')}</h1>
            <p className="py-2">{t('updateDateInfo')}</p>
            <p className="py-2">
              {t('cookiesIntroduction1')}{' '}
              <a
                href="https://netz-website-next.vercel.app"
                target="_blank"
                data-custom-class="link"
              >
                https://netz-website-next.vercel.app
              </a>{' '}
              {t('cookiesIntroduction2')}
            </p>
            <HeadingWithContent
              heading={t('whatAreCookiesTitle')}
              content={t('whatAreCookiesContent')}
            />

            <HeadingWithContent
              heading={t('whyDoWeUseCookiesTitle')}
              content={t('whyDoWeUseCookiesContent')}
            />

            <HeadingWithContent
              heading={t('howCanIControlCookiesTitle')}
              content={t('howCanIControlCookiesContent')}
            >
              <ul>
                <ListItem content={t('cookieData1')} />
                <ListItem content={t('cookieData2')} />
              </ul>
            </HeadingWithContent>

            <HeadingWithContent
              heading={t('controlCookiesInBrowserTitle')}
              content={t('controlCookiesInBrowserContent')}
            />
            <HeadingWithContent
              heading={t('otherTrackingTechnologiesTitle')}
              content={t('otherTrackingTechnologiesContent')}
            />
            <HeadingWithContent
              heading={t('flashCookiesTitle')}
              content={t('flashCookiesContent')}
            />
            <HeadingWithContent
              heading={t('targetedAdvertisingTitle')}
              content={t('targetedAdvertisingContent')}
            />
            <HeadingWithContent
              heading={t('cookieUpdateTitle')}
              content={t('cookieUpdateContent')}
            />
            <HeadingWithContent
              heading={t('furtherInformationTitle')}
              content={t('furtherInformationContent')}
            >
              <address className="py-4">
                {' '}
                Anita Surma und Michael Szczerbak Netz GbR Im Weimer 8, 61137
                Schöneck, Germany Schöneck Hessen 61137 Germany Tel: (+49)176 22
                0 44
              </address>
            </HeadingWithContent>

            <p className="pb-10">
              {t('termlyLink')}
              <a href="https://termly.io/products/cookie-consent-manager/">
                Termly Cookie Consent Manager
              </a>
              .
            </p>
          </Container>
        </Wrapper>
      </main>
    </>
  );
}

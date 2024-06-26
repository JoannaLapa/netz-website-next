import { languages, fallbackLng } from '../i18n/settings';
import type { Metadata } from 'next';
import { useTranslation } from '../i18n';
import Header from '../components/sections/Header/index';
import HeroSlider from '../components/sections/HeroSlider/index';
import WhyUsSection from '../components/sections/WhyUsSection';
import NumberedSection from '../components/sections/NumberedSection/component';
import CTAsection from '../components/sections/CTAsection';
import Footer from '../components/sections/Footer';
import ContentImageSection from '../components/sections/ContentImageSection';
import QuoteImageSection from '../components/sections/QuoteImageSection';
import CookiesBanner from '../components/sections/CookiesBanner/component';

const links = [
  { href: '#contactForm' },
  { href: '#aboutUs' },
  { href: '#contact' },
];
type Props = {
  params: { lng: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (languages.indexOf(params.lng) < 0) params.lng = fallbackLng;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(params.lng);
  return {
    title: t('metaTitle'),
    description: t('content'),
  };
}

export default async function Page({ params: { lng } }: Props) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t, i18n } = await useTranslation(lng);
  return (
    <>
      <Header lng={lng} nav homeLink={t('homeLink')} href={`/${lng}`} />
      <main className="lg:pt-[120px]">
        <HeroSlider
          skipLinkContent={t('sliderSkipLink')}
          skipLink="#aboutUs"
          links={links}
          lng={lng}
        />
        <QuoteImageSection
          title={t('aboutUsTitle')}
          accentText={t('aboutUsAccentText')}
          description={t('aboutUsDescription')}
          alt={t('aboutUsImageAlt')}
          id="aboutUs"
        />
        <WhyUsSection
          title={t('whyUsTitle')}
          accentText={t('whyUsAccentText')}
          experienceSuffix={t('experienceSuffix')}
          lng={lng}
          i18n={i18n}
        />
        <NumberedSection
          title={t('offerTitle')}
          accentText={t('offerAccentText')}
          lng={lng}
          i18n={i18n}
        />
        <ContentImageSection
          title={t('fleetTitle')}
          accentText={t('accentText')}
          content="fleetList"
          index={6}
          listTitle={t('listTitle')}
          alt={t('fleetImageAlt')}
          id="fleet"
        />
        <CTAsection
          title={t('CTAtitle')}
          accentText={t('CTAaccentText')}
          description={t('CTAdescription')}
          buttonTitle={t('buttonTitle')}
          name={t('namePlaceholder')}
          company={t('companyPlaceholder')}
          email={t('emailPlaceholder')}
          message={t('messagePlaceholder')}
          privacyPolicyText={t('privacyPolicy')}
          privacyPolicyLink={{
            href: `/${lng}/privacy-policy`,
            title: t('privacyPolicyLink'),
          }}
          successMessage={t('successMessage')}
          errorMessage={t('errorMessage')}
        />
      </main>
      <Footer
        alt={t('logoAlt')}
        privacyInfo={t('privacyInfo')}
        realisation={t('realisation')}
        learnMore={t('privacyPolicyLink')}
        cookiesLink={`/${lng}/cookies`}
      />
      <CookiesBanner
        cookiesBannerContent={t('cookiesBannerContent')}
        cookiesBannerLinkText={t('cookiesBannerLinkText')}
        cookiesBannerAcceptButton={t('cookiesBannerAcceptButton')}
        cookiesBannerDeclineButton={t('cookiesBannerDeclineButton')}
      />
    </>
  );
}

import { languages, fallbackLng } from '../i18n/settings';
import { useTranslation } from '../i18n';
import Header from './components/sections/Header/index';
import HeroSlider from './components/sections/HeroSlider/index';
import BoxImageSection from './components/sections/BoxImageSection';
import WhyUsSection from './components/sections/WhyUsSection';
import NumberedSection from './components/sections/NumberedSection/component';
import ListSection from './components/sections/ListSection';
import CTAsection from './components/sections/CTAsection';
import Footer from './components/sections/Footer';
import ContentImageSection from './components/sections/ContentImageSection';
import QuoteImageSection from './components/sections/QuoteImageSection';

const links = [
  { href: '#contactForm' },
  { href: '#aboutUs' },
  { href: '#contact' },
];

export default async function Page({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t, i18n } = await useTranslation(lng);

  return (
    <>
      <Header lng={lng} />
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

        <BoxImageSection
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
        <ListSection
          title={t('fleetTitle')}
          accentText={t('accentText')}
          content="fleetList"
          index={6}
          listTitle={t('listTitle')}
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
          namePlaceholder={t('namePlaceholder')}
          companyPlaceholder={t('companyPlaceholder')}
          emailPlaceholder={t('emailPlaceholder')}
          messagePlaceholder={t('messagePlaceholder')}
          privacyPolicyText={t('privacyPolicy')}
          privacyPolicyLink={{ href: '#', title: t('privacyPolicyLink') }}
        />
      </main>
      <Footer
        alt={t('logoAlt')}
        privacyInfo={t('privacyInfo')}
        realisation={t('realisation')}
        learnMore={t('privacyPolicyLink')}
      />
    </>
  );
}

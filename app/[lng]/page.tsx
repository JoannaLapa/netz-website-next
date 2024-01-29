import { languages, fallbackLng } from '../i18n/settings';
import { useTranslation } from '../i18n';
import Header from '../components/sections/Header/index';
import HeroSlider from '../components/sections/HeroSlider/index';
import BoxImageSection from '../components/sections/BoxImageSection';
import WhyUsSection from '../components/sections/WhyUsSection';
import NumberedSection from '../components/sections/NumberedSection/component';

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
  const { t } = await useTranslation(lng);

  return (
    <>
      <Header lng={lng} />
      <main className="pt-5 lg:pt-[174px]">
        <HeroSlider
          slides={[1, 2, 3]}
          skipLink={t('sliderSkipLink')}
          links={links}
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
        />

        <NumberedSection
          title={t('offerTitle')}
          accentText={t('offerAccentText')}
          numberedboxes={[0, 1, 2]}
        />
      </main>
    </>
  );
}

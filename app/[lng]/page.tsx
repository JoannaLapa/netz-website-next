import { languages, fallbackLng } from '../i18n/settings';
import { useTranslation } from '../i18n';
import Header from '../components/sections/Header/index';
import HeroSlider from '../components/sections/HeroSlider/index';

const slides = [0, 1, 2];

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
      <main className="mt-5">
        <HeroSlider slides={slides} skipLink={t('sliderSkipLink')} />
      </main>
    </>
  );
}

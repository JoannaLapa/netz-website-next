import { languages, fallbackLng } from '../i18n/settings';
import { useTranslation } from '../i18n';
import Header from '../components/sections/Header/index';
import Button from '../components/ui/Button/index';
import HeroSlider from '../components/sections/HeroSlider/index';

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
      <main className='mt-5 md:mt-[200px]'>
        <HeroSlider headingTitle={t('title')} buttonTitle={t('askForQuote')} subtitle1={t('subtitle1')} subtitle2={t('subtitle2')} skipLink={t('sliderSkipLink')}/>
      </main>
    </>
  );
}

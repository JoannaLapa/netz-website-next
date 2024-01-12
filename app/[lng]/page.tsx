import { languages, fallbackLng } from '../i18n/settings';
import { useTranslation } from '../i18n';
import Header from '../components/sections/Header/component';
import Wrapper from '../components/ui/Wrapper';
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
      <main>
        <h1>{t('title')}</h1>
      </main>
    </>
  );
}

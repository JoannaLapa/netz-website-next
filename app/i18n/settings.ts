export const fallbackLng = 'de';
export const languages = [fallbackLng, 'pl', 'en'];
export const defaultNS = 'translation';
export const cookieName = 'i18next';
export const fallbackNS = defaultNS;

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS,
) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}

import { render } from '@testing-library/react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import WhyUsSection from './index';

//Translations mock
i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        box1Title: 'Expanded ',
        box1AccentText: 'database of trusted carriers',
        box2Title: 'Insurance for every transport up to ',
        box2AccentText: '300,000 euros',
        box3Title: 'All necessary ',
        box3AccentText: 'permits and licenses',
      },
    },
  },
});

test('render WhyUsSection with title, accentText and experienceSuffix', () => {
  const element = render(
    <WhyUsSection
      title="Test title"
      accentText="Test accent text"
      experienceSuffix="Test experience suffix"
      lng="en"
      i18n={i18n}
    />,
  );

  expect(element.getByText('Test title')).not.toBeNull();
  expect(element.getByText('Test accent text')).not.toBeNull();
  expect(element.getByText('Test experience suffix')).not.toBeNull();
});

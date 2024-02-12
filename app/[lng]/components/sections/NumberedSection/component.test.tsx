import { render } from '@testing-library/react';
import NumberedSection from './index';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//Translations mock
i18n.use(initReactI18next).init({
  lng: 'de',
  fallbackLng: 'de',
  resources: {
    de: {
      translation: {
        numberedBox1Title: 'Lokaler und europäischer Transport',
        numberedBox1Description:
          'Verladung, Entladung und umfassende Frachtpflege',
        numberedBox2Title: 'Umfassende Fahrzeugausstattung',
        numberedBox2Description: 'Aufzüge, Gabelstapler usw.',
        numberedBox3Title: 'Lagerhäuser',
        numberedBox3Description:
          'Lagerung, Sicherung und Verpackung von Gütern',
      },
    },
  },
});

test('render NumberedSection with title, accentText and numberedboxes', () => {
  const element = render(
    <NumberedSection
      title="Test title"
      accentText="Test accent text"
      lng="de"
      i18n={i18n}
    />,
  );

  expect(element.getByText('Test title')).not.toBeNull();
  expect(element.getByText('Test accent text')).not.toBeNull();
  expect(element.getByText('01')).not.toBeNull();
  expect(element.getByText('02')).not.toBeNull();
  expect(element.getByText('03')).not.toBeNull();
});

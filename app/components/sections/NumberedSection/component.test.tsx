import { render } from '@testing-library/react';
import NumberedSection from './index';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//Translations mock
i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        numberedBoxes: [
          {
            title: 'Local and European Transport',
            description: 'Loading, unloading, and comprehensive freight care',
          },
          {
            title: 'Comprehensive Vehicle Equipment',
            description: 'Elevators, forklifts, etc.',
          },
          {
            title: 'Warehouses',
            description: 'Storage, securing, and packaging of goods',
          },
        ],
      },
    },
  },
});

test('render NumberedSection with title, accentText and numberedboxes', () => {
  const element = render(
    <NumberedSection
      title="Test title"
      accentText="Test accent text"
      numberedBoxes={[1, 2, 3]}
      lng="en"
    />,
  );

  expect(element.getByText('Test title')).not.toBeNull();
  expect(element.getByText('Test accent text')).not.toBeNull();
  expect(element.getByText('01')).not.toBeNull();
  expect(element.getByText('02')).not.toBeNull();
  expect(element.getByText('03')).not.toBeNull();
});

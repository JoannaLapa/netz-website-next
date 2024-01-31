import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HeroSlider from './index';

const slides = [1, 2, 3];

const links = [
  { href: '#contactForm' },
  { href: '#aboutUs' },
  { href: '#contact' },
];

//Translations mock
i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        slideTitle0: 'Slide 1',
        slideTitle1: 'Slide 2',
        slideTitle2: 'Slide 3',
        slideButtonTitle0: 'Button 1',
        slideButtonTitle1: 'Button 2',
        slideButtonTitle2: 'Button 3',
      },
    },
  },
});

test('renders correctly', () => {
  const { getByLabelText } = render(
    <HeroSlider
      slides={slides}
      skipLinkContent="Skip slider"
      links={links}
      skipLink="#test"
    />,
  );

  //check if all elements are rendered
  slides.forEach((slide, index) => {
    expect(getByLabelText(`Go to slide nr ${index + 1}`)).not.toBeNull();
  });
});

test('changes slide on button click', () => {
  const { getByLabelText, getByTestId } = render(
    <HeroSlider
      slides={slides}
      skipLinkContent="Skip slider"
      links={links}
      skipLink="#test"
    />,
  );

  fireEvent.click(getByLabelText('Go to slide nr 2'));

  // Check if second slide is visible
  expect(getByTestId('slide-2').getAttribute('class')).toMatch(
    /fill-primary-100/gi,
  );
});

// import { render } from '@testing-library/react';
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import WhyUsSection from './index';

// // //Translations mock
// i18n.use(initReactI18next).init({
//   lng: 'en',
//   fallbackLng: 'en',
//   resources: {
//     en: {
//       translation: {
//         boxes: [
//           {
//             title: 'Expanded ',
//             accentText: 'database of trusted carriers',
//           },
//           {
//             title: 'Insurance for every transport up to ',
//             accentText: '300,000 euros',
//           },
//           {
//             title: 'All necessary ',
//             accentText: 'permits and licenses',
//           },
//         ],
//       },
//     },
//   },
// });

// test('render WhyUsSection with title, accentText and experienceSuffix', () => {
//   const element = render(
//     <WhyUsSection
//       title="Test title"
//       accentText="Test accent text"
//       experienceSuffix="Test experience suffix"
//       lng="en"
//     />,
//   );

//   expect(element.getByText('Test title')).not.toBeNull();
//   expect(element.getByText('Test accent text')).not.toBeNull();
//   expect(element.getByText('Test experience suffix')).not.toBeNull();
// });

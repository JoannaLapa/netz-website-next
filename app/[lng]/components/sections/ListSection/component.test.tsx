import { render } from '@testing-library/react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ListSection from './index';

//Translations mock
i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        testContent: [
          'test list content',
          'test list content',
          'test list content',
        ],
      },
    },
  },
});

test('renders ListSection with title, accentText, listTitle, and ListItem components', () => {
  const { getByText, getAllByText } = render(
    <ListSection
      title="Test Title"
      accentText="Test accent text"
      listTitle="test list title"
      index={3}
      content="testContent"
    />,
  );

  expect(getByText('Test Title')).not.toBeNull();
  expect(getByText('Test accent text')).not.toBeNull();
  expect(getByText('test list title')).not.toBeNull();

  // Check that the correct number of ListItem components have been rendered
  const listItems = getAllByText('test list content');
  expect(listItems).toHaveLength(3);
});

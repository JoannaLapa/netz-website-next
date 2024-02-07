import { render } from '@testing-library/react';
import WhyUsSection from './index';

test('render WhyUsSection with title, accentText and experienceSuffix', () => {
  const element = render(
    <WhyUsSection
      title="Test title"
      accentText="Test accent text"
      experienceSuffix="Test experience suffix"
    />,
  );

  expect(element.getByText('Test title')).not.toBeNull();
  expect(element.getByText('Test accent text')).not.toBeNull();
  expect(element.getByText('Test experience suffix')).not.toBeNull();
});
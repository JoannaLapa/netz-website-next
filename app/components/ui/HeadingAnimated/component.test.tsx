import { render } from '@testing-library/react';
import HeadingAnimated from './index';

test('renders HeadingAnimated', () => {
  const element = render(
    <HeadingAnimated title="tested title" accentText="tested accent text" />,
  );

  expect(element).not.toBeNull();
  expect(element.getByText('tested title')).not.toBeNull();
});

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListItem from './index';

test('renders correctly', () => {
  const { getByText, getByTestId } = render(
    <ListItem
      href="https://www.google.com"
      linkText="link text"
      content="content"
    />,
  );

  const link = getByTestId('list-item-link');

  expect(getByText('link text')).not.toBeNull();
  expect(getByText('content')).not.toBeNull();
  expect(link).toBeInTheDocument();
  expect(link.getAttribute('href')).toBe('https://www.google.com');
});

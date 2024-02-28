import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeadingWithContent from './index';

test('renders correctly', () => {
  const { getByText } = render(
    <HeadingWithContent
      heading="heading title"
      subheading="subheading title"
      inShortText="in short text content"
      content="content"
    >
      <p>This is children component</p>
    </HeadingWithContent>,
  );

  expect(getByText('heading title')).not.toBeNull();
  expect(getByText('subheading title')).not.toBeNull();
  expect(getByText('in short text content')).not.toBeNull();
  expect(getByText('content')).not.toBeNull();
  expect(getByText('This is children component')).not.toBeNull();
});

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BoldedContentBox from './index';

test('renders correctly', () => {
  const { getByText } = render(
    <BoldedContentBox
      importantNotice="Important notice"
      content="Content"
      icon={true}
    />,
  );

  expect(getByText('Content')).not.toBeNull();
  expect(getByText('Important notice')).not.toBeNull();
});

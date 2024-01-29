import { render } from '@testing-library/react';
import NumberedSection from './index';

test('render NumberedSection with title, accentText and numberedboxes', () => {

  const element = render(<NumberedSection title="Test title" accentText="Test accent text" numberedBoxes={[1, 2, 3]} />);

  expect(element.getByText('Test title')).not.toBeNull();
  expect(element.getByText('Test accent text')).not.toBeNull();
  expect(element.getByText('01')).not.toBeNull();
  expect(element.getByText('02')).not.toBeNull();
  expect(element.getByText('03')).not.toBeNull();
});
import { render } from '@testing-library/react';
import Wrapper from './index';

test('renders Wrapper with children inside', () => {
  const element = render(
    <Wrapper element="div">
      <p>Test</p>
    </Wrapper>,
  );

  expect(element).not.toBeNull();
  expect(element.getByText('Test')).not.toBeNull();
});

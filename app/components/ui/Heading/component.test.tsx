import { render } from '@testing-library/react';
import Heading from './index';

test('renders Heading', () => {
  const element = render(
    <Heading title="tested title" accentText='tested accent text'/>
  );

  expect(element).not.toBeNull();
  expect(element.getByText('tested title')).not.toBeNull();
});

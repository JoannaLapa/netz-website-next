import { render, fireEvent } from '@testing-library/react';
import Button from './index';

test('Render Button', () => {
  const element = render(<Button title="test" />);

  expect(element.getByText('test')).not.toBeNull();
});

test('Test Button onClick handler', () => {
  const handleClick = jest.fn();

  const { getByText } = render(<Button title="test" onClick={handleClick} />);

  fireEvent.click(getByText('test'));
  expect(handleClick).toHaveBeenCalled();
});

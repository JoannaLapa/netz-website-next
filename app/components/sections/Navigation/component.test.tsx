import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import Navigation from './index';

test('renders NavList and MenuToggle', async () => {
  render(<Navigation lng="en" />);

  await waitFor(() =>
    expect(document.querySelector('nav')).toBeInTheDocument(),
  );
  await waitFor(() =>
    expect(document.querySelector('button')).toBeInTheDocument(),
  );
});

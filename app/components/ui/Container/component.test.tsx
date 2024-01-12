import { render } from '@testing-library/react';
import Container from './index';

test('render Container with children inside', () => {
    const element = render(<Container variant="section"><p>Test</p></Container>);

    expect(element).not.toBeNull();
    expect(element.getByText('Test')).not.toBeNull();
})
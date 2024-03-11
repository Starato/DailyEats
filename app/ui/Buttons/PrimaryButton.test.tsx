import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { PrimaryButton } from './PrimaryButton';

test('Button renders with correct text', () => {
    render(<PrimaryButton name='Click Me!' route="/"/>);
    const button = screen.getByText('Click Me!');
    expect(button).toBeInTheDocument();
});
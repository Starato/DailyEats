import '@testing-library/jest-dom';
import { screen, render, getByText, fireEvent } from '@testing-library/react';
import { PrimaryButtonOutlined } from './PrimaryButtonOutlined';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
    useRouter: jest.fn()
}))

// const pushMock = jest.fn();

const component = <PrimaryButtonOutlined 
    name='Click Me!' route=''/>;

describe('Primary Button Outlined', () => {
    it('renders text value', () => {
        render(component);
        const button = screen.getByText('Click Me!');
        expect(button).toBeInTheDocument();
    });

    test('Click', () => {
        render(component);
        const button = screen.getByText('Click Me!');
        fireEvent.click(button)
    });
})
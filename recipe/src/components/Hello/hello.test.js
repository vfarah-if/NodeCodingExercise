import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Hello from './Hello';

describe('Hello', () => {
    test('should say hello stranger when no name assigned', () => {
        const container = render(<Hello/>);

        expect(container.getByText('Hello stranger')).toBeInTheDocument();
    });

    test('should say hello to the person when name is assigned', () => {
        const container = render(<Hello name="Jane Doe"/>);

        expect(container.getByText('Hello Jane Doe')).toBeInTheDocument()
    });

});
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hello from './Hello';

describe('Hello', () => {
    test('should say hello stranger when no name assigned', () => {
        render(<Hello/>);

        expect(screen.getByText('Hello strange')).toBeInTheDocument();
    });

    test('should say hello to the person when name is assigned', () => {
        render(<Hello name="Jane Doe"/>);

        expect(screen.getByText('Hello Jane Doe')).toBeInTheDocument()
    });
});

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Hello from './Hello';

describe('Hello', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    })

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    })

    test('should say hello stranger when no name assigned', () => {
        render(<Hello/>, container);

        expect(container.textContent).toContain('Hello stranger')
    });

    test('should say hello to the person when name is assigned', () => {
        render(<Hello name="Jane Doe"/>, container);

        expect(container.textContent).toContain('Hello Jane Doe')
    });

});
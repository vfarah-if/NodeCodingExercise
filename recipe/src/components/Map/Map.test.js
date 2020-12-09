import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import Map from './Map';

describe('Map', () => {
	let container;
	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	test('should output a test with the center position on a map', () => {
		render(<Map center="Location" />, container);

		expect(container.textContent).toContain('Location');
	});
});

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { DefaultCard } from '../Card.stories';

describe('Card', () => {
	it('should create a card with children contents', () => {
		const { container } = render(<DefaultCard />);

		expect(container).toMatchSnapshot();
	});
});

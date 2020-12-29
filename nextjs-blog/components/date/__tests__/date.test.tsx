import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { EmptyDate } from '../date.stories';

describe('date', () => {
	test('should generate a no time assigned message when nothing assigned', () => {
		const component = render(<EmptyDate />);

		expect(component.container).toMatchSnapshot();
	});
});

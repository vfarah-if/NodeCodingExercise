import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { EmptyDate, DefaultDate } from '../date.stories';

describe('Date tests as defined by stories', () => {
	test('should generate a no time assigned message when nothing assigned', () => {
		const component = render(<EmptyDate />);

		expect(component.container).toMatchSnapshot();
	});

	test('should generate a default date when assigned all expected values', () => {
		const component = render(<DefaultDate dateString={DefaultDate.args.dateString} />);

		expect(component.container).toMatchSnapshot();
	});
});

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {
	DefaultLayout,
	TwoColumnLayout
} from '../Cards.stories';

describe('Cards', () => {
	it('should create a default four column cards list', () => {
		const { container } = render(
			<DefaultLayout columnCount={DefaultLayout.args?.columnCount} />
		);

		expect(container).toMatchSnapshot();
	});

	it('should create a default 2 column cards list', () => {
		const { container } = render(
			<TwoColumnLayout columnCount={TwoColumnLayout.args?.columnCount} />
		);

		expect(container).toMatchSnapshot();
	});
});

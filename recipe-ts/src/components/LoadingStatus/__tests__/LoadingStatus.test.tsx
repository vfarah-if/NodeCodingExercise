import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import {
	DefaultLoadingStatus,
	CustomDisplayLoadingStatus,
	InvisibleLoadingStatus,
} from '../LoadingStatus.stories';

describe('LoadingStatus', () => {
	test('should load default status when no value assigned', () => {
		const { container } = render(
			<DefaultLoadingStatus
				isLoading={DefaultLoadingStatus.args?.isLoading || false}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	test('should load custom display status', () => {
		const { container } = render(
			<CustomDisplayLoadingStatus
				isLoading={CustomDisplayLoadingStatus.args?.isLoading || false}
				displayValue={CustomDisplayLoadingStatus.args?.displayValue}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	test('should be invisible when not loading', () => {
		const { container } = render(
			<InvisibleLoadingStatus
				isLoading={InvisibleLoadingStatus.args?.isLoading || false}
				displayValue={InvisibleLoadingStatus.args?.displayValue}
			/>
		);

		expect(container).toMatchSnapshot();
	});
});

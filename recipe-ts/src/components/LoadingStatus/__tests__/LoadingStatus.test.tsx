import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import {
	DefaultLoadingStatus,
	InvisibleLoadingStatus,
} from '../LoadingStatus.stories';

describe('LoadingStatus', () => {
	test('should load default status when no value assigned', () => {
		const { container } = render(<DefaultLoadingStatus isLoading={true} />);

		expect(container).toMatchSnapshot();
	});

	test('should be invisible when not loading', () => {
		const { container } = render(
			<InvisibleLoadingStatus isLoading={false} />
		);

		expect(container).toMatchSnapshot();
	});
});

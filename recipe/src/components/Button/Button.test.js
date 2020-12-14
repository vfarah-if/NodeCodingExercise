import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {
	PrimaryButtonStory,
	DefaultButtonStory,
	SmallButtonStory,
	LargeButtonStory,
} from './Button.stories';

describe('button', () => {
	test('should create a button with a primary Button display name', () => {
		const { container } = render(
			<PrimaryButtonStory {...PrimaryButtonStory.args} />
		);

		expect(screen.getByRole('button')).toHaveTextContent('Button');
		expect(container.querySelector('button')).toMatchSnapshot();
	});

	test('should create a button simple Button display name', () => {
		const renderResponse = render(
			<DefaultButtonStory {...DefaultButtonStory.args} />
		);

		expect(
			renderResponse.container.querySelector('button')
		).toMatchSnapshot();
	});

	test('should create a button large Button display name', () => {
		const renderResponse = render(
			<LargeButtonStory {...LargeButtonStory.args} />
		);

		expect(
			renderResponse.container.querySelector('button')
		).toMatchSnapshot();
	});

	test('should create a button small Button display name', () => {
		const renderResponse = render(
			<SmallButtonStory {...SmallButtonStory.args} />
		);

		expect(
			renderResponse.container.querySelector('button')
		).toMatchSnapshot();
	});
});

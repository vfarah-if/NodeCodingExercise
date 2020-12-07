import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { StoryOne } from './Button.stories';

describe('button', () => {
	test('should create a button with Button display name', () => {
		render(<StoryOne {...StoryOne.args} />);

		expect(screen.getByRole('button')).toHaveTextContent('Button');
	});
});

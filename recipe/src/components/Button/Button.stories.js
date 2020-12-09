import React from 'react';
import Button from './Button';
import { action } from '@storybook/addon-actions';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'Example/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

const ButtonTemplate = (args) => <Button {...args} onClick={action('onClicked...')} />;

export const StoryOne = ButtonTemplate.bind({});
StoryOne.args = {
	primary: true,
	displayName: 'Button',
};

export const StoryTwo = ButtonTemplate.bind({});
StoryTwo.args = {
	displayName: 'Button',
};

export const StoryThree = ButtonTemplate.bind({});
StoryThree.args = {
	size: 'large',
	displayName: 'Button',
};

export const StoryFour = ButtonTemplate.bind({});
StoryFour.args = {
	size: 'small',
	displayName: 'Button',
};

import React from 'react';
import Button from './Button';
import { action } from '@storybook/addon-actions';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'Component/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

const ButtonTemplate = (args) => <Button displayName="Button" {...args} onClick={action('onClicked...')} />;

export const PrimaryButtonStory = ButtonTemplate.bind({});
PrimaryButtonStory.args = {
	primary: true
};

export const DefaultButtonStory = ButtonTemplate.bind({});
DefaultButtonStory.args = {};

export const LargeButtonStory = ButtonTemplate.bind({});
LargeButtonStory.args = {
	size: 'large'
};

export const SmallButtonStory = ButtonTemplate.bind({});
SmallButtonStory.args = {
	size: 'small'
};

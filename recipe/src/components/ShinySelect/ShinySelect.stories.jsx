import React, { Fragment } from 'react';
import ShinySelect from './ShinySelect';
import { action } from '@storybook/addon-actions';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'Component/ShinySelect',
	component: ShinySelect,
};

const ShinySelectTemplate = (args) => (
	<Fragment>
		<ShinySelect {...args} onChange={action('onChanged...')} />
	</Fragment>
);
export const SimpleOptionsStory = ShinySelectTemplate.bind({});
SimpleOptionsStory.args = {
	displayName: 'Choose a Mars rover',
	value: '',
	optionsList: [
		{
			value: '',
			text: 'Select your option',
		},
		{
			value: 'curiosity',
			text: 'Curiosity',
		},
		{
			value: 'spirit',
			text: 'Spirit',
		},
		{
			value: 'opportunity',
			text: 'Opportunity',
		},
	],
};

export const OptionGroupsStory = ShinySelectTemplate.bind({});
OptionGroupsStory.args = {
	displayName: 'Select a car',
	value: 'volvo',
	optionsList: [
		{
			group: 'Swedish Cars',
			value: 'volvo',
			text: 'Volvo',
		},
		{
			group: 'Swedish Cars',
			value: 'saab',
			text: 'Saab',
		},
		{
			group: 'German Cars',
			value: 'vw',
			text: 'VW',
		},
		{
			group: 'German Cars',
			value: 'mercedes',
			text: 'Merc',
		},
		{
			group: 'German Cars',
			value: 'audi',
			text: 'Audi',
		},
	],
};

export const OptionAndGroupsStory = ShinySelectTemplate.bind({});
OptionAndGroupsStory.args = {
	displayName: 'Select a car',
	value: '',
	optionsList: [
		{
			value: '',
			text: 'Select a car',
		},
		{
			group: 'Swedish Cars',
			value: 'volvo',
			text: 'Volvo',
		},
		{
			group: 'Swedish Cars',
			value: 'saab',
			text: 'Saab',
		},
		{
			group: 'German Cars',
			value: 'vw',
			text: 'VW',
		},
		{
			group: 'German Cars',
			value: 'mercedes',
			text: 'Merc',
		},
		{
			group: 'German Cars',
			value: 'audi',
			text: 'Audi',
		},
	],
};

export const ValuesOnlyStory = ShinySelectTemplate.bind({});
ValuesOnlyStory.args = {
	value: '',
	optionsList: [
		{
			value: '',
			text: 'Select a car',
		},
		{
			value: 'volvo',
		},
		{
			value: 'saab',
		},
		{
			value: 'vw',
		},
		{
			value: 'mercedes',
		},
		{
			value: 'audi',
		},
	],
};

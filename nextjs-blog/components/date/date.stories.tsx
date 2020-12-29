import React from 'react';
import Date, { DateProps } from '.';
import { Story, Meta } from '@storybook/react/types-6-0';

export default { title: 'Component/Date', component: Date } as Meta;

const DateTemplate: Story<DateProps> = (args: DateProps) => (
	<>
		<Date {...args} />
	</>
);

export const EmptyDate = DateTemplate.bind({});
EmptyDate.args = {
	dateString: undefined,
};

export const DefaultDate = DateTemplate.bind({});
DefaultDate.args = {
	dateString: '2011-10-05T14:48:00.000Z',
};

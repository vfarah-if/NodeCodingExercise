import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import LoadingStatus, { LoadingStatusProps } from './LoadingStatus';

export default {
	title: 'Component/LoadingStatus',
	component: LoadingStatus,
} as Meta;

const LoadingStatusTemplate: Story<LoadingStatusProps> = (args) => (
	<Fragment>
		<LoadingStatus {...args} />
	</Fragment>
);

export const DefaultLoadingStatus = LoadingStatusTemplate.bind({});
DefaultLoadingStatus.args = { isLoading: true };

export const InvisibleLoadingStatus = LoadingStatusTemplate.bind({});
InvisibleLoadingStatus.args = {
	isLoading: false
};

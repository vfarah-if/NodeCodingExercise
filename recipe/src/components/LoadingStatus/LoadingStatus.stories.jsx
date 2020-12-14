import React, { Fragment } from 'react';
import LoadingStatus from './LoadingStatus';

/* eslint-disable import/no-anonymous-default-export */
export default {
	title: 'Component/LoadingStatus',
	component: LoadingStatus,
};

const LoadingStatusTemplate = (args) => (
	<Fragment>
		<LoadingStatus {...args} />
	</Fragment>
);


export const DefaultLoadingStatusStory = LoadingStatusTemplate.bind({});
DefaultLoadingStatusStory.args = { isLoading: true };

export const IncorporateCustomDisplayNameStory = LoadingStatusTemplate.bind({});
IncorporateCustomDisplayNameStory.args = {
	isLoading: true,
	displayValue: 'Poor mans loader ...',
};
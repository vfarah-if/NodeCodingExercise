import React from 'react';
import LoadingStatus from './LoadingStatus';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'Example/LoadingStatus',
	component: LoadingStatus,
};

const LoadingStatusTemplate = (args) => <LoadingStatus {...args} />;

export const DefaultLoadingStatusStory = LoadingStatusTemplate.bind({});
DefaultLoadingStatusStory.args = { isLoading: true };

export const IncorporateCustomDisplayNameStory = LoadingStatusTemplate.bind({});
IncorporateCustomDisplayNameStory.args = {
	isLoading: true,
	displayValue: 'Poor mans loader ...',
};

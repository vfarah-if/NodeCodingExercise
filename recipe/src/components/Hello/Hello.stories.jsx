import React from 'react';
import Hello from './Hello';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'Componentuuuu/Hello',
	component: Hello,
};

const HelloTemplate = (args) => <Hello {...args} />;

export const HelloStrangerStory = HelloTemplate.bind({});
HelloStrangerStory.args = {
	name: undefined,
};

export const HelloUserStory = HelloTemplate.bind({});
HelloUserStory.args = {
	name: 'Jane Doe',
};

import React from 'react';
import Header from './Header';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'Example/Header',
	component: Header,
};

const HeaderTemplate = (args) => <Header {...args} />;

export const LoggedInStory = HeaderTemplate.bind({});
LoggedInStory.args = {
	user: {},
	onLogin: () => {},
	onLogout: () => {},
	onCreateAccount: () => {},
};

export const LoggedOutStory = HeaderTemplate.bind({});
LoggedOutStory.args = {
	user: undefined,
	onLogin: () => {},
	onLogout: () => {},
	onCreateAccount: () => {},
};

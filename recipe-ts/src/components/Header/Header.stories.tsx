import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { Header, HeaderProps } from './Header';

export default {
	title: 'Component/Header',
	component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => (
	<Header
		{...args}
		onLogin={action('onLoginClicked...')}
		onLogout={action('onLogoutClicked...')}
		onCreateAccount={action('onCreateAccountClicked...')}
	/>
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
	user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

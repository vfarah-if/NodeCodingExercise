import React from 'react';
import Header from './Header';

import { action } from '@storybook/addon-actions';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'Component/Header',
	component: Header,
};

const HeaderTemplate = (args) => (
	<Header
		{...args}
		onLogin={action('onLoginClicked...')}		
		onLogout={action('onLogoutClicked...')}
		onCreateAccount={action('onCreateAccountClicked...')}
	/>
);

export const UserExistingInStory = HeaderTemplate.bind({});
UserExistingInStory.args = {
	user: {}
};

export const NoUserExistingStory = HeaderTemplate.bind({});
NoUserExistingStory.args = {
	user: undefined
};

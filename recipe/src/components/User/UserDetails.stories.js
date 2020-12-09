import React from 'react';
import UserDetails from './UserDetails';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'User Details/Example',
	component: UserDetails,
};

const UserDetailsTemplate = (args) => <UserDetails {...args} />;

export const UserDetailsWithIdStory = UserDetailsTemplate.bind({});
UserDetailsWithIdStory.args = {
    id:1
};

export const UserDetailsNotFoundStory = UserDetailsTemplate.bind({});
UserDetailsNotFoundStory.args = {
    id:1000
};

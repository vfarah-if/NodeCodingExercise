import React, { Fragment } from 'react';
import List from './List';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'Component/List',
	Component: List,
};

export const DefaultListStory = () => (
	<Fragment>
		<List />
	</Fragment>
);

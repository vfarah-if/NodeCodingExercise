import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Thumbnail, { ThumbnailProps } from './Thumbnail';

export default {
	title: 'Component/Thumbnail',
	component: Thumbnail,
} as Meta;

const ThumbnailTemplate: Story<ThumbnailProps> = (args) => (
	<Fragment>
		<Thumbnail {...args} style={{border: '1px solid yellow'}} />
	</Fragment>
);

export const SimpleThumbnail = ThumbnailTemplate.bind({});
SimpleThumbnail.args = {
	imageSource: 'https://miro.medium.com/max/1592/0*aaeiaAX5kMyHCQZT.png',
	description: 'Jest logo',
};

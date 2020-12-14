import React from 'react';
import Thumbnail from './Thumbnail';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'Component/Thumbnail',
	component: Thumbnail,
};

const ThumbnailTemplate = (args) => (
	<>
		<Thumbnail {...args} style={{border: '1px solid yellow'}}  />
	</>
);

export const SimpleThumbnailStory = ThumbnailTemplate.bind({});
SimpleThumbnailStory.args = {
	imageSource: 'https://miro.medium.com/max/1592/0*aaeiaAX5kMyHCQZT.png',
	description: 'Jest logo',
};

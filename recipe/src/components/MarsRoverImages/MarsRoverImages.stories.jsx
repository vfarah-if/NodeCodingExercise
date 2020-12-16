import React, { Fragment } from 'react';
import MarsRoverImages from './MarsRoverImages';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'Component/MarsRoverImages',
	component: MarsRoverImages,
};

const MarsRoverImagesTemplate = (args) => (
	<Fragment>
		<MarsRoverImages {...args} />
	</Fragment>
);

export const MarsRoverDefaultStory = MarsRoverImagesTemplate.bind({});
MarsRoverDefaultStory.args = {};

export const MarsRoverWithPresetsStory = MarsRoverImagesTemplate.bind({});
MarsRoverWithPresetsStory.args = { roverType: 'spirit', cameraType:'NAVCAM' };

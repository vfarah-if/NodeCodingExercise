import { Story, Meta } from '@storybook/react/types-6-0';
import React, { Fragment } from 'react';
import MarsRoverImages, { MarsRoverImagesProps } from './MarsRoverImages';

export default {
	title: 'Component/MarsRoverImages',
	component: MarsRoverImages,
} as Meta;

const MarsRoverImagesTemplate: Story<MarsRoverImagesProps> = (args) => (
	<Fragment>
		<MarsRoverImages {...args}/>
	</Fragment>
);

export const MarsRoverDefault = MarsRoverImagesTemplate.bind({});
MarsRoverDefault.args = {};

export const MarsRoverWithPresets = MarsRoverImagesTemplate.bind({});
MarsRoverWithPresets.args = { roverType: 'spirit', cameraType:'NAVCAM' };

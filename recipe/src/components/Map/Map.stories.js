import React from 'react';
import Map from './Map';

/* eslint-disable import/no-anonymous-default-export */
export default {
	title: 'Example/Map',
	component: Map,
};

const MapTemplate = (args) => <Map {...args} />;

export const MapLocationStory = MapTemplate.bind({});
MapLocationStory.args = {
	center: '6 Lake Garden, TW10',
};

import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Cards, { CardsProps } from './Cards';
import Card from '../Card';

const EIGHT_CARD_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8];

export default {
	title: 'Component/Cards',
	component: Cards,
} as Meta;

const CardsTemplate: Story<CardsProps> = (args) => (
	<Fragment>
		<Cards {...args}>
			{EIGHT_CARD_ARRAY.map((item) => (
				<Card key={item}>
					<h1>{item}</h1>
				</Card>
			))}
		</Cards>
	</Fragment>
);

export const DefaultLayout = CardsTemplate.bind({});
DefaultLayout.args = {};

export const TwoColumnLayout = CardsTemplate.bind({});
TwoColumnLayout.args = {columnCount: 2};

export const ZeroColumnLayout = CardsTemplate.bind({});
ZeroColumnLayout.args = {columnCount: 0};
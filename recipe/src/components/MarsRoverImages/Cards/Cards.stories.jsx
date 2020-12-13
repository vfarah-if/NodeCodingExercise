import React, { Fragment } from 'react';
import Card from '../Card';
import Cards from './Cards';

const EIGHT_CARD_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'Component/Cards',
	component: Cards,
};

const CardsTemplate = (args) => (
	<Fragment>
		<Cards {...args}>
			{EIGHT_CARD_ARRAY.map((item) => (
				<Card key={item} >
					<h1>{item}</h1>
				</Card>
			))}
		</Cards>
	</Fragment>
);

export const DefaultLayoutStory = CardsTemplate.bind({});
DefaultLayoutStory.args = {};

export const TwoColumnLayoutStory = CardsTemplate.bind({});
TwoColumnLayoutStory.args = {columnCount: 2};

export const ZeroColumnLayoutStory = CardsTemplate.bind({});
ZeroColumnLayoutStory.args = {columnCount: 0};
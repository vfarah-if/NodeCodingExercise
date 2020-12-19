import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Card, { CardProps } from './Card';

export default {
	title: 'Component/Card',
	component: Card,
} as Meta;

export const DefaultCard: Story<CardProps> = () => (
	<>
		<Card>
			<div className="container">
				<h4>
					<b>John Doe</b>
				</h4>
				<p>Architect & Engineer</p>
				<img
					src="https://www.w3schools.com/howto/img_avatar.png"
					alt="Avatar"
				/>
			</div>
		</Card>
	</>
);

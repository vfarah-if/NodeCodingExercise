import React from 'react';
import Card from './Card';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'Component/Card',
	component: Card,
};

export const CardStory = () => (
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

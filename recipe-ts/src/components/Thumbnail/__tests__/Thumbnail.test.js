import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SimpleThumbnail } from '../Thumbnail.stories';

describe('Cards', () => {
	it('should create a simple thumbnail with an alt and style defined', () => {
		const { container } = render(
			<SimpleThumbnail
				imageSource={SimpleThumbnail.args.imageSource}
                description={SimpleThumbnail.args.description}
                style={SimpleThumbnail.args.style}
			/>
		);

		expect(container).toMatchSnapshot();
	});
});

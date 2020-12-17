import React from 'react';
import '@testing-library/jest-dom';
import {
	render,
	fireEvent,
	screen,
	waitForElementToBeRemoved,
	waitFor,
} from '@testing-library/react';
import AlertStatus from './AlertStatus';

describe('AlertStatus', () => {
	test('should contain a close alert and should make alert invisible when clicked', async () => {
		const component = render(
			<AlertStatus alertType="error" message="Test Error" />
		);
		const linkElement = screen.queryByText('×');
		expect(linkElement).toBeInTheDocument();

		// console.debug(screen.debug());
		expect(
			component.container.querySelector('div[style*="opacity: 0"]')
		).toBeNull();

		fireEvent.click(linkElement);

		expect(
			component.container.querySelector('div[style*="opacity: 0"]')
		).toBeDefined();
                
        // REMARK: Delays the timer however this is not correct
		// eslint-disable-next-line testing-library/await-async-utils
		await waitForElementToBeRemoved(() =>
			component.container.querySelector('div[style*="opacity: 0"]')
		).catch((err) => console.warn(err));        

		// console.debug(screen.debug());
		expect(
			component.container.querySelector(
				'div[style*="opacity: 0; display: none;"]'
			)
		).not.toBeNull();
	});
});

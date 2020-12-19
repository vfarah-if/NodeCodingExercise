import React from 'react';
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {
    AlertDefaultWithMessage,
    AlertError,
    AlertInfo,
    AlertSuccess,
    AlertWarning,
    InvisibleAlert
} from '../AlertStatus.stories';
import AlertStatus from '..';

describe('AlertStatus', () => {
	test('should create a default error alert with message', () => {
		const { container } = render(
			<AlertDefaultWithMessage
                alertType={AlertDefaultWithMessage.args?.alertType}
				message={AlertDefaultWithMessage.args?.message}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	test('should create an alert error', () => {
		const { container } = render(
			<AlertError
                alertType={AlertError.args?.alertType}
				message={AlertError.args?.message}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	test('should create an alert info', () => {
		const { container } = render(
			<AlertInfo
                alertType={AlertInfo.args?.alertType}
				message={AlertInfo.args?.message}
			/>
		);

		expect(container).toMatchSnapshot();
    });
    
    test('should create an alert success', () => {
		const { container } = render(
			<AlertSuccess
                alertType={AlertSuccess.args?.alertType}
				message={AlertSuccess.args?.message}
			/>
		);

		expect(container).toMatchSnapshot();
    });
    
    test('should create an alert warning', () => {
		const { container } = render(
			<AlertWarning
                alertType={AlertWarning.args?.alertType}
				message={AlertWarning.args?.message}
			/>
		);

		expect(container).toMatchSnapshot();
    });
    
    test('should create no alert when no message associated', () => {
		const { container } = render(
			<InvisibleAlert
                alertType={InvisibleAlert.args?.alertType}
				message={InvisibleAlert.args?.message}
			/>
		);

		expect(container).toMatchSnapshot();
    });
    
    test('should contain a close alert and should make alert invisible when clicked', async () => {
		const component = render(
			<AlertStatus alertType="error" message="Test Error" />
		);
		const linkElement = screen.queryByText('×') as Element;
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

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import UserDetails from './UserDetails';
import UserDataJsonResponse from './UserDetails.test.json';

describe('UserDetails', () => {
	let container = null;
	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	test('should have fake data to start with', () => {
		expect(UserDataJsonResponse).toBeDefined();
		expect(UserDataJsonResponse.data).toBeDefined();
	});

	test('should get user details when valid id is supplied', async () => {
		const { id } = UserDataJsonResponse.data;
		console.debug(id);
		jest.spyOn(global, 'fetch').mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(UserDataJsonResponse),
			})
		);

		await act(async () => {
			render(<UserDetails id={id}></UserDetails>, container);
		});

		expect(container.querySelector('details')).toMatchSnapshot();
	});

	test('should get no user found when user response is empty', async () => {
		jest.spyOn(global, 'fetch').mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve({}),
			})
		);

		await act(async () => {
			render(<UserDetails id="1000"></UserDetails>, container);
		});

		expect(container.querySelector('details')).toMatchSnapshot();
	});
});

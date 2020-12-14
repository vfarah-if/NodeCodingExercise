import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import UserDetails from './UserDetails';
import UserDataJsonResponse from './UserDetails.test.json';

describe('UserDetails', () => {
	test('should have fake data to start with', () => {
		expect(UserDataJsonResponse).toBeDefined();
		expect(UserDataJsonResponse.data).toBeDefined();
	});

	test('should get user details when valid id is supplied', () => {
		const { id } = UserDataJsonResponse.data;
		console.debug(id);
		jest.spyOn(global, 'fetch').mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(UserDataJsonResponse),
			})
		);

		const { container } = render(<UserDetails id={id} />);

		expect(container.querySelector('details')).toMatchSnapshot();
	});

	test('should get no user found when user response is empty', async () => {
		const id = 1000;
		jest.spyOn(global, 'fetch').mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve({}),
			})
		);

		const { container } = render(<UserDetails id={id} />);

		expect(container.querySelector('details')).toMatchSnapshot();
	});
});

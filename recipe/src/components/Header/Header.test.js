import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import Header from '../Header';

describe('Header', () => {
	let loginHandler, logoutHandler, createAccountHandler;

	beforeEach(() => {
		loginHandler = jest.fn();
		logoutHandler = jest.fn();
		createAccountHandler = jest.fn();
	});

	it('should render header with login and sign up when no user assigned', () => {
		const container = render(
			<Header
				onLogin={loginHandler}
				onLogout={logoutHandler}
				onCreateAccount={createAccountHandler}
			/>
		);

		expect(container.getByText('Log in')).toBeInTheDocument();
		expect(container.getByText('Sign up')).toBeInTheDocument();
		expect(container.queryByText('Log out')).toBeNull();
	});

	it('should login a user or sign up appropriatly', () => {
		const container = render(
			<Header
				onLogin={loginHandler}
				onLogout={logoutHandler}
				onCreateAccount={createAccountHandler}
			/>
		);

		fireEvent.click(container.getByText('Log in'));
		fireEvent.click(container.getByText('Sign up'));

		expect(loginHandler).toBeCalled();
		expect(createAccountHandler).toBeCalled();
		expect(logoutHandler).not.toBeCalled();
	});

	it('should render header with logout when user is assigned', () => {
		const user = {};

		const container = render(
			<Header
				user={user}
				onLogin={loginHandler}
				onLogout={logoutHandler}
				onCreateAccount={createAccountHandler}
			/>
		);

		expect(container.queryByText('Log in')).not.toBeInTheDocument();
		expect(container.queryByText('Sign up')).not.toBeInTheDocument();
		expect(container.getByText('Log out')).toBeInTheDocument();
	});

	it('should logout user when button clicked', () => {
		const user = {};

		const container = render(
			<Header
				user={user}
				onLogin={loginHandler}
				onLogout={logoutHandler}
				onCreateAccount={createAccountHandler}
			/>
		);

		const logoutButton = container.getByText('Log out');
		fireEvent.click(logoutButton);

		expect(loginHandler).not.toBeCalled();
		expect(createAccountHandler).not.toBeCalled();
		expect(logoutHandler).toBeCalled();
	});
});
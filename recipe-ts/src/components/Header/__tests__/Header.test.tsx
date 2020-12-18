import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';

import Header from '../Header';
import { LoggedIn, LoggedOut } from '../Header.stories';

describe('Header', () => {
	let loginHandler: any, logoutHandler: any, createAccountHandler: any;

	beforeEach(() => {
		loginHandler = jest.fn();
		logoutHandler = jest.fn();
		createAccountHandler = jest.fn();
	});

    test('should create a logged user header component', () => {
		const { container } = render(
			<LoggedIn user={LoggedIn.args?.user || undefined}/>
		);

		expect(container.querySelector('header')).toMatchSnapshot();
    });
    
    test('should create a logged out header component', () => {
		const { container } = render(
			<LoggedOut user={LoggedOut.args?.user || undefined}/>
		);

		expect(container.querySelector('header')).toMatchSnapshot();
	});


	it('should render header with login and sign up when no user assigned', () => {
		render(
			<Header
				onLogin={loginHandler}
				onLogout={logoutHandler}
				onCreateAccount={createAccountHandler}
			/>
		);

		expect(screen.getByText('Log in')).toBeInTheDocument();
		expect(screen.getByText('Sign up')).toBeInTheDocument();
		expect(screen.queryByText('Log out')).toBeNull();
	});

	it('should login a user or sign up appropriatly', () => {
		render(
			<Header
				onLogin={loginHandler}
				onLogout={logoutHandler}
				onCreateAccount={createAccountHandler}
			/>
		);

		fireEvent.click(screen.getByText('Log in'));
		fireEvent.click(screen.getByText('Sign up'));

		expect(loginHandler).toBeCalled();
		expect(createAccountHandler).toBeCalled();
		expect(logoutHandler).not.toBeCalled();
	});

	it('should render header with logout when user is assigned', () => {
		const user = {};

		const renderResponse = render(
			<Header
				user={user}
				onLogin={loginHandler}
				onLogout={logoutHandler}
				onCreateAccount={createAccountHandler}
			/>
		);

		expect(renderResponse.queryByText('Log in')).not.toBeInTheDocument();
		expect(renderResponse.queryByText('Sign up')).not.toBeInTheDocument();
		expect(renderResponse.getByText('Log out')).toBeInTheDocument();
	});

	it('should logout user when button clicked', () => {
		const user = {};

		render(
			<Header
				user={user}
				onLogin={loginHandler}
				onLogout={logoutHandler}
				onCreateAccount={createAccountHandler}
			/>
		);

		const logoutButton = screen.getByText('Log out');
		fireEvent.click(logoutButton);

		expect(loginHandler).not.toBeCalled();
		expect(createAccountHandler).not.toBeCalled();
		expect(logoutHandler).toBeCalled();
	});
});

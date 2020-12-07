import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Header from '../Header';

describe('Header', () => {
	let container, loginHandler, logoutHandler, createAccountHandler;

	beforeEach(() => {
		loginHandler = jest.fn();
		logoutHandler = jest.fn();
		createAccountHandler = jest.fn();
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	it('should render header with login and sign up when no user assigned', () => {
		act(() => {
			render(
				<Header
					onLogin={loginHandler}
					onLogout={logoutHandler}
					onCreateAccount={createAccountHandler}
				/>,
				container
			);
		});

		expect(container.textContent).toContain('Log in');
		expect(container.textContent).toContain('Sign up');
		expect(container.textContent).not.toContain('Log out');
    });
    
    it('should login a user or sign up appropriatly', () => {
		act(() => {
			render(
				<Header
					onLogin={loginHandler}
					onLogout={logoutHandler}
					onCreateAccount={createAccountHandler}
				/>,
				container
			);
		});

        const buttons = container.querySelectorAll('button');
        expect(buttons.length).toBe(2);
        buttons[0].click();
        buttons[1].click();

        expect(loginHandler).toBeCalled();
        expect(createAccountHandler).toBeCalled();
        expect(logoutHandler).not.toBeCalled();
	});

	it('should render header with logout when user is assigned', () => {
		const user = {};

		act(() => {
			render(
				<Header
					user={user}
					onLogin={loginHandler}
					onLogout={logoutHandler}
					onCreateAccount={createAccountHandler}
				/>,
				container
			);
		});

		expect(container.textContent).not.toContain('Log in');
		expect(container.textContent).not.toContain('Sign up');
		expect(container.textContent).toContain('Log out');
    });
    
    it('should logout user when button clicked', () => {
        const user = {};

		act(() => {            
			render(
				<Header
                    user={user}
					onLogin={loginHandler}
					onLogout={logoutHandler}
					onCreateAccount={createAccountHandler}
				/>,
				container
			);
		});

        const buttons = container.querySelectorAll('button');
        expect(buttons.length).toBe(1);
        buttons[0].click();

        expect(loginHandler).not.toBeCalled();
        expect(createAccountHandler).not.toBeCalled();
        expect(logoutHandler).toBeCalled();
	});
});

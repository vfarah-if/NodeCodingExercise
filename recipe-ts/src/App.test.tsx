import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
	test('should render login button', () => {
		window.alert = jest.fn();
		const alertSpy = jest.spyOn(window, 'alert');
		render(<App />);

		const linkElement = screen.getByText(/Log in/i);

		expect(linkElement).toBeInTheDocument();
		fireEvent.click(linkElement);
		expect(alertSpy).toHaveBeenCalledWith('OnLogin ...');
	});

	test('should render sign up button', () => {
		window.alert = jest.fn();
		const alertSpy = jest.spyOn(window, 'alert');
		render(<App />);

		const linkElement = screen.getByText(/Sign up/i);

		expect(linkElement).toBeInTheDocument();
		fireEvent.click(linkElement);
		expect(alertSpy).toHaveBeenCalledWith('createAccountHandler ...');
	});

	test('should render mars rover images component', () => {
		render(<App />);

		const linkElement = screen.getByText(/Data provided by NASA/i);

		expect(linkElement).toBeInTheDocument();
	});
});

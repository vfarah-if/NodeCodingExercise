import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("given App", () => {
	test("should render hello stranger component", () => {
		render(<App />);

		const linkElement = screen.getByText(/Hello stranger/i);

		expect(linkElement).toBeInTheDocument();
	});

	test("should render acme header component", () => {
		render(<App />);

		const linkElement = screen.getByText(/Acme/i);

		expect(linkElement).toBeInTheDocument();
	});

	test("should render login button", () => {
		const alertSpy = jest.spyOn(window, 'alert');
		render(<App />);

		const linkElement = screen.getByText(/Log in/i);
		
		expect(linkElement).toBeInTheDocument();
		fireEvent.click(linkElement);
		expect(alertSpy).toHaveBeenCalledWith('OnLogin ...');
	});

	test("should render sign up button", () => {
		const alertSpy = jest.spyOn(window, 'alert');
		render(<App />);

		const linkElement = screen.getByText(/Sign up/i);
		
		expect(linkElement).toBeInTheDocument();
		fireEvent.click(linkElement);
		expect(alertSpy).toHaveBeenCalledWith('createAccountHandler ...');
	});

	test("should render big button component", () => {
		render(<App />);

		const linkElement = screen.getByText(/Big Button/i);
		const alertSpy = jest.spyOn(window, 'alert');

		expect(linkElement).toBeInTheDocument();
		fireEvent.click(linkElement);
        expect(alertSpy).toHaveBeenCalledWith('Hello from big button');

	});

	test("should render mars rover component", () => {
		render(<App />);

		const linkElement = screen.getByText(/Data provided by NASA/i);
	

		expect(linkElement).toBeInTheDocument();
	});

	test("should render a user details component", () => {
		const component = render(<App />);
		
		const linkElement = component.container.querySelector('li[class="card"]');

		expect(linkElement).toBeDefined();
		expect(linkElement).toMatchSnapshot();
	});

});

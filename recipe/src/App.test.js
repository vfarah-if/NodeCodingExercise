import { render, screen } from "@testing-library/react";
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

	test("should render big button component", () => {
		render(<App />);

		const linkElement = screen.getByText(/Big Button/i);

		expect(linkElement).toBeInTheDocument();
	});
});

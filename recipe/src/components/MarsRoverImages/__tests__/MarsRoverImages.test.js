import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

import emptyResponse from './empty-response.json';
import curiosityFHAZResponse from './curiosity-fhaz-response.json';
import MarsRoverImages from '../MarsRoverImages';

describe('MarsRoverImages', () => {
	describe('When retrieving an empty response', () => {
		beforeEach(() => {
			jest.spyOn(window, 'fetch').mockImplementation(() =>
				Promise.resolve({
					json: () => Promise.resolve(emptyResponse),
				})
			);
		});

		test('should show success alert with zero images loaded', async () => {
			render(<MarsRoverImages roverType="spirit" cameraType="MAST" />);

			await waitFor(() => {
				expect(window.fetch).toHaveBeenCalledTimes(1);
				// console.debug(screen.debug());
				expect(
					screen.getByText(`Succeeded retrieving '0' photos!`)
				).toBeInTheDocument();
			});
		});

		test('should show not found image', async () => {
			render(<MarsRoverImages roverType="spirit" cameraType="MAST" />);

			await waitFor(() => {
				expect(window.fetch).toHaveBeenCalledTimes(1);
				// console.debug(screen.debug());
				expect(screen.getByAltText('none found')).toBeInTheDocument();
			});
		});
	});

	describe('When retrieving an full response', () => {
		beforeEach(() => {
			jest.spyOn(window, 'fetch').mockImplementation(() =>
				Promise.resolve({
					json: () => Promise.resolve(curiosityFHAZResponse),
				})
			);
		});

		test('should show success alert with zero images loaded', async () => {
			render(<MarsRoverImages roverType="curiosity" cameraType="FHA" />);

			await waitFor(() => {
				expect(window.fetch).toHaveBeenCalledTimes(1);
				// console.debug(screen.debug());
				expect(
					screen.getByText(`Succeeded retrieving '4' photos!`)
				).toBeInTheDocument();
			});

			expect(
				screen.getByText(`Succeeded retrieving '4' photos!`)
			).toMatchSnapshot();
		});

		test('should show one cardslist and four cards', async () => {
			const { container } = render(
				<MarsRoverImages roverType="curiosity" cameraType="FHA" />
			);

			await waitFor(() => {
				expect(window.fetch).toHaveBeenCalledTimes(1);
				// console.debug(screen.debug());
				expect(container.querySelectorAll('ul').length).toBe(1);
				expect(container.querySelectorAll('li').length).toBe(4);
			});

			expect(container.querySelector('ul')).toMatchSnapshot();
		});
	});

	describe('Select tests', () => {
		let selectArray, component;
		beforeEach(() => {
			jest.spyOn(window, 'fetch').mockImplementation(() =>
				Promise.resolve({
					json: () => Promise.resolve(emptyResponse),
				})
			);
		});

		test('should have two selects', async () => {
			component = render(
				<MarsRoverImages roverType="curiosity" cameraType="FHA" />
			);
			
			await waitFor(() => {
				selectArray = component.container.querySelectorAll('select');
				expect(selectArray.length).toBe(2);
			});

			expect(selectArray[0]).toMatchSnapshot('Rovers');
			expect(selectArray[1]).toMatchSnapshot('Cameras');
		});
	});
});

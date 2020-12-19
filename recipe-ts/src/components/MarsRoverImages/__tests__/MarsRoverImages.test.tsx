import React from 'react';
import '@testing-library/jest-dom';
import { render, RenderResult, screen, waitFor } from '@testing-library/react';

import emptyResponse from './empty-response.json';
import curiosityFHAZResponse from './curiosity-fhaz-response.json';
import MarsRoverImages, { NasaPhotos } from '../MarsRoverImages';
import { marsRoverImageService } from '../marsRoverImageService';
jest.mock('../MarsRoverImageService');
const mockedService = marsRoverImageService as jest.MockedFunction<
	typeof marsRoverImageService
>;

describe('MarsRoverImages', () => {
	describe('When retrieving an empty response', () => {
		beforeEach(() => {
			mockedService.mockResolvedValue(emptyResponse as NasaPhotos);
		});

		test('should show success alert with zero images loaded', async () => {
			render(<MarsRoverImages roverType="spirit" cameraType="MAST" />);

			await waitFor(() => {
				expect(mockedService).toHaveBeenCalledTimes(1);
				// console.debug(screen.debug());
				expect(
					screen.getByText(`Succeeded retrieving '0' photos!`)
				).toBeInTheDocument();
			});
		});

		test('should show not found image', async () => {
			render(<MarsRoverImages roverType="spirit" cameraType="MAST" />);

			await waitFor(() => {
				expect(mockedService).toHaveBeenCalledTimes(1);
				// console.debug(screen.debug());
				expect(screen.getByAltText('none found')).toBeInTheDocument();
			});
		});
	});

	describe('When retrieving an full response', () => {
		beforeEach(() => {
			mockedService.mockResolvedValue(
				curiosityFHAZResponse as NasaPhotos
			);
		});

		test('should show success alert with zero images loaded', async () => {
			render(<MarsRoverImages roverType="curiosity" cameraType="FHA" />);

			await waitFor(() => {
				expect(mockedService).toHaveBeenCalledTimes(1);
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
				expect(mockedService).toHaveBeenCalledTimes(1);
				expect(container.querySelectorAll('ul').length).toBe(1);
				expect(container.querySelectorAll('li').length).toBe(4);
			});

			// console.debug(screen.debug());
			expect(container.querySelector('ul')).toMatchSnapshot();
		});
	});

	//TODO: Figure this out later
	// describe('Select tests', () => {
	// 	let selectArray: NodeListOf<HTMLSelectElement>,
	// 		component: RenderResult<typeof import('@testing-library/dom/types/queries')>;

	// 	test('should have two selects', async () => {
	// 		await waitFor(() => {
	// 			component = render(
	// 				<MarsRoverImages roverType="curiosity" cameraType="FHA" />
	// 			);
	// 			selectArray = component.container.querySelectorAll('select');
	// 			expect(selectArray.length).toBe(2);
	// 		});
	// 		expect(selectArray[0]).toMatchSnapshot('Rovers');
	// 		expect(selectArray[1]).toMatchSnapshot('Cameras');
	// 	});
	// });
});

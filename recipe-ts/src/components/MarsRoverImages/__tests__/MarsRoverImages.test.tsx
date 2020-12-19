import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

import emptyResponse from './empty-response.json';
import curiosityFHAZResponse from './curiosity-fhaz-response.json';
import MarsRoverImages, { NasaPhotos } from '../MarsRoverImages';

describe('MarsRoverImages', () => {
	describe('When retrieving an empty response', () => {
		beforeEach(() => {
			jest.spyOn(window, 'fetch').mockImplementation(() =>
				Promise.resolve({
					json: () => Promise<NasaPhotos>.resolve(emptyResponse),
				})
			);
		});

		test('should show success alert with zero images loaded', async () => {
			render(<MarsRoverImages roverType="spirit" cameraType="MAST" />);

			await waitFor(() => expect(window.fetch).toHaveBeenCalledTimes(1));

			// console.debug(screen.debug());
			expect(
				screen.getByText(`Succeeded retrieving '0' photos!`)
			).toBeInTheDocument();
		});

		test('should show not found image', async () => {
			render(<MarsRoverImages roverType="spirit" cameraType="MAST" />);

			await waitFor(() => expect(window.fetch).toHaveBeenCalledTimes(1));

			// console.debug(screen.debug());
			expect(screen.getByAltText('none found')).toBeInTheDocument();
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

			await waitFor(() => expect(window.fetch).toHaveBeenCalledTimes(1));

			// console.debug(screen.debug());
			expect(
				screen.getByText(`Succeeded retrieving '4' photos!`)
			).toBeInTheDocument();
			expect(
				screen.getByText(`Succeeded retrieving '4' photos!`)
			).toMatchSnapshot();
		});

		test('should show one cardslist and four cards', async () => {
			const { container } = render(
				<MarsRoverImages roverType="curiosity" cameraType="FHA" />
			);

			await waitFor(() => expect(window.fetch).toHaveBeenCalledTimes(1));

			// console.debug(screen.debug());
			expect(container.querySelectorAll('ul').length).toBe(1);
			expect(container.querySelectorAll('li').length).toBe(4);
			expect(container.querySelector('ul')).toMatchSnapshot();
		});
  });
  
  describe('Select tests', () => {
    let selectArray: string | any[] | NodeListOf<HTMLSelectElement>, component;
    beforeEach(() => {
      component = render(<MarsRoverImages roverType="curiosity" cameraType="FHA" />);
      selectArray = component.container.querySelectorAll('select');
    })

    test('should have two selects', () => {
      expect(selectArray.length).toBe(2);
    });

    test('should have first select setup with a list of rovers', () => {
      expect(selectArray[0]).toMatchSnapshot()
    });

    test('should have second select setup with a list of cameras', () => {
      expect(selectArray[1]).toMatchSnapshot()
    });    
  });
});

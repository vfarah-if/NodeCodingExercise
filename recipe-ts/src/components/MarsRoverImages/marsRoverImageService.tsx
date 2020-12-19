import config from '../../config';
import { NasaPhotos } from './MarsRoverImages';
const { NASAPIKey } = config;

export const marsRoverImageService = async (
	rover: string,
	camera: string
): Promise<NasaPhotos> => {
	const response = await fetch(
		`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=100&camera=${camera}&api_key=${NASAPIKey}`
	);
	const result = (await response.json()) as NasaPhotos;
	return result;
};

import React, { useState, useEffect } from 'react';
import LoadingStatus from '../LoadingStatus';
import AlertStatus from '../AlertStatus';
import ShinySelect from '../ShinySelect';
import Thumbnail from '../Thumbnail';
import Cards from '../Cards';
import Card from '../Card';
import { ROVER_OPTIONS, ROVER_CAMERA_OPTIONS } from './constants';
import nasaLogo from '../../assets/nasa-logo-300x250.png';
import noImage from '../../assets/no-photo-400X300.png';
import { marsRoverImageService } from './marsRoverImageService';

import './style/index.css';

export interface MarsRoverImagesProps {
	roverType?: string;
	cameraType?: string;
}

interface NasaPhoto {
	id: string;
	img_src: string;
}

export interface NasaPhotos {
	photos: Array<NasaPhoto>;
}

const MarsRoverImages: React.FC<MarsRoverImagesProps> = ({
	roverType = 'curiosity',
	cameraType,
}) => {
	const [roverChosen, setRoverChosen] = useState(roverType || 'curiosity');
	const [cameraChosen, setCameraChosen] = useState(cameraType || '');
	const [error, setError] = useState(null);
	const [successMessage, setSuccessMessage] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [photos, setPhotos] = useState<Array<NasaPhoto> | null>(null);
	const fetchMarsRoverPhotos = async () => {
		try {
			setIsLoading(true);
			if (roverChosen && cameraChosen && cameraChosen !== '') {
				const { photos } = await marsRoverImageService(
					roverChosen,
					cameraChosen
				);
				setPhotos(photos);
				setSuccessMessage(
					`Succeeded retrieving '${photos.length}' photos!`
				);
			} else {
				setPhotos([]);
			}
			return photos;
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchMarsRoverPhotos();
		// eslint-disable-next-line
	}, [roverChosen, cameraChosen]);

	const handleRoverSelection = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setRoverChosen(event.target.value);
		setCameraChosen('');
		// setSuccessMessage(null);
	};

	const handleCameraSelection = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setCameraChosen(event.target.value);
	};

	const hasNoPhotos = !photos?.length;

	return (
		<div className="Mars-Rover-Images">
			<div className="App-intro">
				<img
					src={nasaLogo}
					className="Mars-Rover-logo"
					alt="logo"
				></img>
			</div>
			<span>Data provided by NASA.</span>
			<br />
			<span>
				Each photo was taken on the rover's 100th sol (day) on Mars.
			</span>
			<br />
			<br />
			<ShinySelect
				label="Choose a Mars rover:"
				value={roverChosen}
				optionsList={ROVER_OPTIONS}
				onChange={handleRoverSelection}
			/>
			<br />
			<ShinySelect
				label="Choose a camera:"
				value={cameraChosen}
				optionsList={ROVER_CAMERA_OPTIONS}
				onChange={handleCameraSelection}
			/>
			<div>
				<br />
				<LoadingStatus isLoading={isLoading}></LoadingStatus>
				<br />
				<AlertStatus alertType="success" message={successMessage} />
			</div>
			{hasNoPhotos ? (
				<div>
					<img alt="none found" src={noImage} />
				</div>
			) : (
				<Cards columnCount={5}>
					{photos?.map((item) => (
						<Card key={item.id}>
							<Thumbnail
								imageSource={item.img_src}
								description={`${item.id}`}
							/>
						</Card>
					))}
				</Cards>
			)}
			<AlertStatus alertType="error" message={error}></AlertStatus>
		</div>
	);
};
export default MarsRoverImages;
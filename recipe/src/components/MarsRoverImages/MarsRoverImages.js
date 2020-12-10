import React, { useState, useEffect } from 'react';

import LoadingStatus from './LoadingStatus';
import AlertStatus from './AlertStatus';
import { ROVER_CAMERAS } from './constants';
import nasaLogo from '../../assets/nasa-logo-300x250.png';
import noImage from '../../assets/no-photo-400X300.png';
import './mars-rover-images.css';

export default function MarsRoverImages() {
	const [roverChosen, setRoverChosen] = useState('curiosity');
	const [cameraChosen, setCameraChosen] = useState('');
	const [error, setError] = useState(null);
	const [successMessage, setSuccessMessage] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [photos, setPhotos] = useState([]);
	const fetchMarsRoverPhotos = async () => {
		try {
			setIsLoading(true);
			if (roverChosen && cameraChosen && cameraChosen !== '') {
				// TODO: create a locally cached response of what is needed and use local cache before going out to the server
				const response = await fetch(
					`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverChosen}/photos?sol=100&camera=${cameraChosen}&api_key=Tv6gAKvEQVPyIf0KwDIHRQXRuJ17XQYIEETD2e35`
				);
				const { photos } = await response.json();
				setPhotos(photos);
				setSuccessMessage(
					`Succeeded to retrieve '${photos.length}' photos!`
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

	const handleRoverSelection = (event) => {
		setRoverChosen(event.target.value);
		setCameraChosen('');
		setSuccessMessage(null);
	};

	const handleCameraSelection = (event) => {
		setCameraChosen(event.target.value);
	};

	const getThumbnailCardItems = (photos) => {
		const cards = photos?.map((item) => (
			<li key={item.id} className="card">
				<img className="thumbnail" src={item.img_src} alt="" />
			</li>
		));
		return cards;
	};

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
			{/* TODO Extract custom selector */}
			<label>
				Choose a Mars rover:
				<select
					className="select-css"
					value={roverChosen}
					onChange={handleRoverSelection}
				>
					<option value="curiosity">Curiosity</option>
					<option value="spirit">Spirit</option>
					<option value="opportunity">Opportunity</option>
				</select>
			</label>
			<br />
			{/* TODO Extract custom selector */}
			<label>
				Choose a camera:
				<select
					className="select-css"
					value={cameraChosen}
					onChange={handleCameraSelection}
				>
					<option value={''}>Cameras:</option>
					{ROVER_CAMERAS[roverChosen].map((camera) => (
						<option key={camera.abbrev} value={camera.abbrev}>
							{camera.name}
						</option>
					))}
				</select>
			</label>
			<div>
				<LoadingStatus
					isLoading={isLoading}
					displayValue="Loading images ..."
				></LoadingStatus>
				<br />
				<AlertStatus alertType="success" message={successMessage} />
			</div>
			{/* TODO: Extract cards and thumbnail component */}
			{!photos?.length ? (
				<div>
					<p>No photos loaded yet!</p>
					<img alt="none found" src={noImage} />
				</div>
			) : (
				<ul className="cards">{getThumbnailCardItems(photos)}</ul>
			)}
			{/* TODO: Extract Status Alert Control */}
			<AlertStatus alertType="error" message={error}></AlertStatus>
		</div>
	);
}

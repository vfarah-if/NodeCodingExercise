import React, { useState, useEffect } from 'react';

import nasaLogo from '../../assets/nasa-logo-300x250.png';
import noImage from '../../assets/no-photo-400X300.png';
import './mars-rover-images.css';
const roverCameras = {
	spirit: [
		{
			abbrev: 'NAVCAM',
			name: 'Navigation Camera',
		},
		{
			abbrev: 'PANCAM',
			name: 'Panoramic Camera',
		},
	],
	curiosity: [
		{
			abbrev: 'FHAZ',
			name: 'Front Hazard Avoidance Camera',
		},
		{
			abbrev: 'RHAZ',
			name: 'Rear Hazard Avoidance Camera',
		},
		{
			abbrev: 'MAST',
			name: 'Mast Camera',
		},
		{
			abbrev: 'CHEMCAM',
			name: 'Chemistry and Camera Complex',
		},
		{
			abbrev: 'NAVCAM',
			name: 'Navigation Camera',
		},
	],
	opportunity: [
		{
			abbrev: 'NAVCAM',
			name: 'Navigation Camera',
		},
		{
			abbrev: 'PANCAM',
			name: 'Panoramic Camera',
		},
	],
};

export default function MarsRoverImages() {
	const [roverChosen, setRoverChosen] = useState('curiosity');
	const [cameraChosen, setCameraChosen] = useState('');
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [photos, setPhotos] = useState([]);
	const fetchMarsRoverPhotos = async () => {
		try {
			setIsLoading(true);
			if (roverChosen && cameraChosen && cameraChosen !== '') {
				const response = await fetch(
					`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverChosen}/photos?sol=100&camera=${cameraChosen}&api_key=Tv6gAKvEQVPyIf0KwDIHRQXRuJ17XQYIEETD2e35`
				);
				const { photos } = await response.json();
				setPhotos(photos);
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
	};

	const handleCameraSelection = (event) => {
		setCameraChosen(event.target.value);
	};
	
	const handleHideErrorAlert = (event) => {
		event.target.parentElement.style.display = 'none'
	}

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
			{isLoading && <p>Loading ...</p>}

			<img src={nasaLogo} className="Mars-Rover-logo" alt="logo"></img>

			<div className="App-intro">
				<h1>Mars Rover Cameras</h1>
			</div>
			<span>Data provided by NASA.</span>
			<br />
			<span>
				Each photo was taken on the rover's 100th sol (day) on Mars.
			</span>
			<br />
			<br />

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
			<label>
				Choose a camera:
				<select
					className="select-css"
					value={cameraChosen}
					onChange={handleCameraSelection}
				>
					<option value={''}>Cameras:</option>
					{roverCameras[roverChosen].map((camera) => (
						<option key={camera.abbrev} value={camera.abbrev}>
							{camera.name}
						</option>
					))}
				</select>
			</label>
			{!photos?.length ? (
				<div>
					<p>No photos loaded yet!</p>
					<img alt="none found" src={noImage} />
				</div>
			) : (
				<ul className="cards">{getThumbnailCardItems(photos)}</ul>
			)}
			{error && (
				<div className="alert">
					<span
						className="closebtn"
						onClick={handleHideErrorAlert}
					>
						&times;
					</span>
					{error}
				</div>
			)}
		</div>
	);
}

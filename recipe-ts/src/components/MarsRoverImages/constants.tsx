export const ROVER_OPTIONS = [
	{
		value: 'curiosity',
		text: 'Curiosity',
	},
	{
		value: 'spirit',
		text: 'Spirit',
	},
	{
		value: 'opportunity',
		text: 'Opportunity',
	},
];

export const ROVER_CAMERA_OPTIONS = [
	{		
		value: '',
		text: 'Choose a camera',
	},
	{
		group: 'Spirit or Opportunity or Curiosity',
		value: 'NAVCAM',
		text: 'Navigation Camera',
	},
	{
		group: 'Spirit or Opportunity',
		value: 'PANCAM',
		text: 'Panoramic Camera',
	},
	{
		group: 'Curiosity',
		value: 'FHAZ',
		text: 'Front Hazard Avoidance Camera',
	},
	{
		group: 'Curiosity',
		value: 'RHAZ',
		text: 'Rear Hazard Avoidance Camera',
	},
	{
		group: 'Curiosity',
		value: 'MAST',
		text: 'Mast Camera',
	},
	{
		group: 'Curiosity',
		value: 'CHEMCAM',
		text: 'Chemistry and Camera Complex',
	}
];

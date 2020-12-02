export const OFF = "OFF";
export const ON = "ON";
export const BLINK = "BLINK";
export const LIGHT_TRANSITION_MAPPING = {
	OFF: ON,
	ON: BLINK,
	BLINK: OFF,
};

export const LOCKED = "LOCKED";
export const UNLOCKED = "UNLOCKED";
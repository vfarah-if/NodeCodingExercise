export const OFF = "OFF";
export const ON = "ON";
export const BLINK = "BLINK";
export const STATES_MAPPING = {
	OFF: ON,
	ON: BLINK,
	BLINK: OFF,
};

export class Flashlight {
	constructor() {
		this.state = OFF;
	}

	press() {
        // TODO: Refactor mutating state
		this.state = STATES_MAPPING[this.state];
	}
}

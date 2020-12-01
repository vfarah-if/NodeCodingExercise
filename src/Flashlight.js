import { OFF, LIGHT_TRANSITION_MAPPING } from "./constants";

export class Flashlight {
	constructor() {
		this.state = OFF;
	}

	press() {
		this.state = LIGHT_TRANSITION_MAPPING[this.state];
	}
}

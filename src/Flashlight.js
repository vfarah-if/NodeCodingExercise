import { OFF, LIGHT_TRANSITION_MAPPING } from "./constants";

/* REMARKS:
**  Epic fail in that this is not a state machine and does not follow the pattern at all
**  The dispatch, transition and action to reducer seemed important but before I did this, I only 
*.  looked at at getting the state 
*/
export class Flashlight {
	constructor() {
		this.state = OFF;
	}

	press() {
		this.state = LIGHT_TRANSITION_MAPPING[this.state];
	}
}

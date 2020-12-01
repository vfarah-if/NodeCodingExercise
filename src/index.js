import { ON, OFF, BLINK } from "./constants";

const statemachine = {
	state: OFF,
	transitions: {
		OFF: {
			press() {
				this.state = ON;
			},
		},
		ON: {
			press() {
				this.state = BLINK;
			},
		},
		BLINK: {
			press() {
				this.state = OFF;
			},
		},
	},
	dispatch(actionName) {
		const action = this.transitions[this.state][actionName];
		console.debug("STATE, ACTION", this.state, action);
		if (action) {
			return action.call(this);
		}
		console.warn(
			`'${actionName}' is not valid. Use 'press' as a valid Action`
		);
	},
};

export const flashlight = statemachine;

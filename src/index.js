import { ON, OFF, BLINK } from "./constants";

/*
** REMARKS: 
**  This was based on an article that helped me understand some aspects of the finite machine pattern
**  and what made me realise from the basic Flashlight.js example of what I innatly got wrong.
**  However I still think this is not great and feel it lacks a good pattern and I found it hard 
**  to TDD what I digested without overcomplicating things
*/
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

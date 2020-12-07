export const OFF = "OFF";
export const ON = "ON";
export const LOCKED = "LOCKED";
export const UNLOCKED = "UNLOCKED";

const stateMachine = {
	store: {
		currentState: LOCKED,
		light: ON,
		alarm: ON,
	},
	transitions: {
		LOCKED: {
			insertCoin() {
				this.store = {
					currentState: UNLOCKED,
					light: OFF,
					alarm: OFF,
				};
			},
		},
		UNLOCKED: {
			noEntry() {
				this.store = {
					currentState: LOCKED,
					light: ON,
					alarm: ON,
				};
			},
		},
	},
	dispatch(actionName) {
		const transition = this.transitions[this.store.currentState];
		const action = transition[actionName];
		action.call(this);
	},
};

export const turnstile = stateMachine;
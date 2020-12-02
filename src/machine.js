import { OFF } from "./constants";

function createMachine(stateMachineDefinition) {
	const result = {
		currentState: stateMachineDefinition.initialState,
	};
	return result;
}

export const machine = createMachine({
	initialState: OFF,
	// define states when needed
	// define transition when needed
});

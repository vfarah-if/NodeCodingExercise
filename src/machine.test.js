import { machine as torch } from "./machine";
import { OFF } from './constants';

// A transition defines the state that should occur

describe.only("torch", () => {    
	test("should get initial and current state of 'OFF'", () => {
        expect(torch.currentState).toBe(OFF);       
    });
});

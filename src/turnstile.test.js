import {turnstile} from './turnstile';

describe('turnstile', () => {
    test('should start with a closed menu', () => {
        expect(turnstile.currentState).toBe('LOCKED');
    });
});
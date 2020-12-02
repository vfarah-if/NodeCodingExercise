import { turnstile } from "./turnstile";
import { OFF, ON, LOCKED, UNLOCKED } from "./constants";

describe("turnstile", () => {
	test("should start with a LOCKED turnstile", () => {
		expect(turnstile.store.currentState).toBe(LOCKED);
    });
    
    test("should have light on by default", () => {
        expect(turnstile.store.currentState).toBe(LOCKED);
        
        expect(turnstile.store.light).toBe(ON);
    });

    test("should have alarm on by default", () => {
        expect(turnstile.store.currentState).toBe(LOCKED);
        
        expect(turnstile.store.alarm).toBe(ON);
    });

	test("should transition a LOCKED turnstile to UNLOCKED when insertCoin is dispatched", () => {
        expect(turnstile.store.currentState).toBe(LOCKED);
        
        turnstile.dispatch('insertCoin');

        expect(turnstile.store.currentState).toBe(UNLOCKED);
    });

    test("should turn lights off when unlocked", () => {
        expect(turnstile.store.currentState).toBe(UNLOCKED);
        
        expect(turnstile.store.light).toBe(OFF);
    });

    test("should turn alarm off when unlocked", () => {
        expect(turnstile.store.currentState).toBe(UNLOCKED);
        
        expect(turnstile.store.alarm).toBe(OFF);
    });

    test("should transition an UNLOCKED turnstile to LOCKED when a noEntry action is dispatched", () => {
        expect(turnstile.store.currentState).toBe(UNLOCKED);
        
        turnstile.dispatch('noEntry');

        expect(turnstile.store.currentState).toBe(LOCKED);
    });

    test("should turn the light back on when locked", () => {
        expect(turnstile.store.currentState).toBe(LOCKED);
        
        expect(turnstile.store.light).toBe(ON);
    });

    test("should turn the alarm back on when locked", () => {
        expect(turnstile.store.currentState).toBe(LOCKED);
        
        expect(turnstile.store.alarm).toBe(ON);
    });
});

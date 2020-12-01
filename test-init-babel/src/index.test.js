import { getUsers } from './index';

describe('when using babel generated classes and tests', () => {
    it('should pass to show jest working', () => {
        expect(true).toBeTruthy();
    });

    it('should get the user repository integration verifying imports work, modules work and arrow functions work and Array modules exist', () => {
        const actual = getUsers();
        
        expect(actual).toBeDefined();
        expect(actual.users).toBeDefined();
        expect(Array.isArray(actual.users)).toBeTruthy();
        expect(actual.users.length).toBe(3);
    });
});
import { getUsers } from './index';

describe('when using babel and tinkering with the settings', () => {
    it('should pass to show jest working with good code completion', () => {
        expect(true).toBeTruthy();
    });

    it('should get the user repository verifying imports work, modules import of json file, functions work and Array modules exist', () => {
        const actual = getUsers();
        
        expect(actual).toBeDefined();
        expect(actual.users).toBeDefined();
        expect(Array.isArray(actual.users)).toBeTruthy();
        expect(actual.users.length).toBe(3);
    });
});
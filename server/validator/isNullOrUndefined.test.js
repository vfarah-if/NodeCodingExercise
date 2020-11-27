import { isNullOrUndefined} from './index';

describe('isNullOrUndefined', () => {
    test('should be true when value is undefined', () => {
        expect(isNullOrUndefined(undefined)).toBeTruthy()
    });

    test('should be true when value is null', () => {
        expect(isNullOrUndefined(null)).toBeTruthy()
    });
});
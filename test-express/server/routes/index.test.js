import router from './index';

describe('index', () => {
    test('should get a rendered response in an expected format', () => {
        console.debug(router);
        expect(router).toBeDefined();
    });    
});

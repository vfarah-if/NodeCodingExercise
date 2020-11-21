import app from "./app";

describe('app', () => {    
    test('should have running tests', () => {        
        expect(true).toBeTruthy();
    });

    test('should contain app', () => {
        expect(app).toBeDefined();
    });
});
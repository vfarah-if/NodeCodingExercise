import { getHotCollection } from './NFTClient';

describe('NFTClient Integration Test', () => {
  describe('getHotCollection', () => {
    let actualResponse;

    beforeAll(async () => {
      try {
        actualResponse = await getHotCollection(10);
      } catch (error) {
        console.error(error);
        actualResponse = undefined;
      }
    });

    test('should get status 200', () => {
      console.debug(actualResponse);

      expect(actualResponse).toBeDefined();
      expect(actualResponse.status).toBe(200);
    });

    test('should get data', async () => {
      const collectionData = await actualResponse.json();
      expect(collectionData.errorCode).toBe(0);
      expect(collectionData.data).toBeDefined();
      expect(collectionData.data.length).toBe(10);
      collectionData.data.forEach((item) => {
        const { id, name } = item;
        expect(id).toBeDefined();
        expect(name).toBeDefined();
        console.debug(item);
      });
    });
  });
});

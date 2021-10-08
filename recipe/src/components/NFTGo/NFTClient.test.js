import { getHotCollection, getBlockChains } from './NFTClient';

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
      // console.debug(actualResponse);

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
        // console.debug(item);
      });
    });
  });

  describe('getBlockChains', () => {
    let actualResponse;

    beforeAll(async () => {
      try {
        actualResponse = await getBlockChains();
      } catch (error) {
        console.error(error);
      }
    });

    test('should get data response', () => {
      expect(actualResponse).toBeDefined();
      expect(actualResponse.status).toBe(200);
    });

    test('should get blockchains', async () => {
      const collectionData = await actualResponse.json();
      expect(collectionData.errorCode).toBe(0);
      expect(collectionData.data).toBeDefined();
      const { blockchains } = collectionData.data;
      expect(blockchains.length).toBeGreaterThan(0);
      blockchains.forEach((item) => {
        const { name, logo, logoGrey, explorerUrl } = item;
        expect(name).toBeDefined();
        expect(logo).toBeDefined();
        expect(logoGrey).toBeDefined();
        expect(explorerUrl).toBeDefined();
        // console.debug(item);
      });
    });
  });
});

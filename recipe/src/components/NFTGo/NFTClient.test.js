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
      const { errorCode, data } = collectionData;
      expect(errorCode).toBe(0);
      expect(data).toBeDefined();
      expect(data.length).toBe(10);
      data.forEach((item) => {
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
      const { errorCode, data } = collectionData;
      expect(errorCode).toBe(0);
      expect(data).toBeDefined();
      const { blockchains } = data;
      expect(blockchains.length).toBeGreaterThan(0);
      blockchains.forEach((blockchain) => {
        const { name, logo, logoGrey, explorerUrl } = blockchain;
        expect(name).toBeDefined();
        expect(logo).toBeDefined();
        expect(logoGrey).toBeDefined();
        expect(explorerUrl).toBeDefined();
        // console.debug(blockchain);
      });
    });
  });
});

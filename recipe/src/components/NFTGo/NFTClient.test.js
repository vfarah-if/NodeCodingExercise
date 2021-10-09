import {
  getHotCollection,
  getBlockChains,
  getTopSales,
  getLatestDeal,
  getRecentlyCreated,
  getTradingHistory,
  getTopHolders,
} from './NFTClient';

describe('NFTClient Integration Tests', () => {
  describe('getHotCollection', () => {
    let actualResponse;

    beforeAll(async () => {
      try {
        actualResponse = await getHotCollection();
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
      expect(data.length).toBeGreaterThan(0);
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

  describe('getTopSales', () => {
    let actualResponse;

    beforeAll(async () => {
      try {
        actualResponse = await getTopSales();
      } catch (error) {
        console.error(error);
      }
    });

    test('should get data response', () => {
      expect(actualResponse).toBeDefined();
      expect(actualResponse.status).toBe(200);
    });

    test('should get top sales', async () => {
      const collectionData = await actualResponse.json();
      const { errorCode, data } = collectionData;
      expect(errorCode).toBe(0);
      expect(data).toBeDefined();
      expect(data.length).toBeGreaterThan(0);
      data.forEach((topSale) => {
        const {
          id,
          collectionId,
          tokenId,
          contract,
          props,
          lastSale,
          highestSale,
          lowestSale,
          // Others ...
        } = topSale;
        expect(id).toBeDefined();
        expect(collectionId).toBeDefined();
        expect(tokenId).toBeDefined();
        expect(contract).toBeDefined();
        expect(props).toBeDefined();
        expect(lastSale).toBeDefined();
        expect(highestSale).toBeDefined();
        expect(lowestSale).toBeDefined();
        // console.debug(topSale);
      });
    });
  });

  describe('getLatestDeal', () => {
    let actualResponse;

    beforeAll(async () => {
      try {
        actualResponse = await getLatestDeal();
      } catch (error) {
        console.error(error);
      }
    });

    test('should get data response', () => {
      expect(actualResponse).toBeDefined();
      expect(actualResponse.status).toBe(200);
    });

    test('should get assets', async () => {
      const collectionData = await actualResponse.json();
      const { errorCode, data } = collectionData;
      expect(errorCode).toBe(0);
      expect(data).toBeDefined();
      const { assets } = data;
      expect(assets.length).toBe(10);
      assets.forEach((asset) => {
        const {
          id,
          collectionId,
          tokenId,
          contract,
          props,
          lastSale,
          highestSale,
          lowestSale,
          // Others ...
        } = asset;
        expect(id).toBeDefined();
        expect(collectionId).toBeDefined();
        expect(tokenId).toBeDefined();
        expect(contract).toBeDefined();
        expect(props).toBeDefined();
        expect(lastSale).toBeDefined();
        expect(highestSale).toBeDefined();
        expect(lowestSale).toBeDefined();
        // console.debug(assets);
      });
    });
  });

  describe('getRecentlyCreated', () => {
    let actualResponse;

    beforeAll(async () => {
      try {
        actualResponse = await getRecentlyCreated();
      } catch (error) {
        console.error(error);
      }
    });

    test('should get data response', () => {
      expect(actualResponse).toBeDefined();
      expect(actualResponse.status).toBe(200);
    });

    test('should get assets', async () => {
      const collectionData = await actualResponse.json();
      const { errorCode, data } = collectionData;
      expect(errorCode).toBe(0);
      expect(data).toBeDefined();
      const { assets } = data;
      expect(assets.length).toBe(10);
      assets.forEach((asset) => {
        const {
          id,
          collectionId,
          tokenId,
          contract,
          props,
          lastSale,
          highestSale,
          lowestSale,
          // Others ...
        } = asset;
        expect(id).toBeDefined();
        expect(collectionId).toBeDefined();
        expect(tokenId).toBeDefined();
        expect(contract).toBeDefined();
        expect(props).toBeDefined();
        expect(lastSale).toBeDefined();
        expect(highestSale).toBeDefined();
        expect(lowestSale).toBeDefined();
        // console.debug(assets);
      });
    });
  });

  describe('getTradingHistory', () => {
    let actualResponse;

    beforeAll(async () => {
      try {
        actualResponse = await getTradingHistory();
      } catch (error) {
        console.error(error);
      }
    });

    test('should get data response', () => {
      expect(actualResponse).toBeDefined();
      expect(actualResponse.status).toBe(200);
    });

    test('should get deals', async () => {
      const collectionData = await actualResponse.json();
      const { errorCode, data } = collectionData;
      expect(errorCode).toBe(0);
      expect(data).toBeDefined();
      const { deals, total } = data;
      expect(deals).toBeDefined();
      expect(total).toBeGreaterThan(0);
      deals.forEach((deal) => {
        const { asset } = deal;
        expect(asset).toBeDefined();
        const {
          id,
          collectionId,
          tokenId,
          contract,
          props,
          lastSale,
          highestSale,
          lowestSale,
          // Others ...
        } = asset;
        expect(id).toBeDefined();
        expect(collectionId).toBeDefined();
        expect(tokenId).toBeDefined();
        expect(contract).toBeDefined();
        expect(props).toBeDefined();
        expect(lastSale).toBeDefined();
        expect(highestSale).toBeDefined();
        expect(lowestSale).toBeDefined();
        // console.debug(asset);
      });
    });
  });

  describe('getTopHolders', () => {
    let actualResponse;

    beforeAll(async () => {
      try {
        actualResponse = await getTopHolders();
      } catch (error) {
        console.error(error);
      }
    });

    test('should get data response', () => {
      expect(actualResponse).toBeDefined();
      expect(actualResponse.status).toBe(200);
    });

    test('should get holder list', async () => {
      const collectionData = await actualResponse.json();
      const { errorCode, data } = collectionData;
      expect(errorCode).toBe(0);
      expect(data).toBeDefined();
      const { list, total } = data;
      expect(list).toBeDefined();
      expect(total).toBeGreaterThan(0);
      list.forEach((holder) => {
        const {
          ranking,
          blockchain,
          address,
          value,
          nftNum,
          lastOrderTimestamp,
          buyVolume,
          sellVolume,
          lastTrade,
          nftNumRatio,
          valueRatio,
        } = holder;
        expect(ranking).toBeDefined();
        expect(blockchain).toBeDefined();
        expect(address).toBeDefined();
        expect(value).toBeDefined();
        expect(nftNum).toBeDefined();
        expect(lastOrderTimestamp).toBeDefined();
        expect(buyVolume).toBeDefined();
        expect(sellVolume).toBeDefined();
        expect(lastTrade).toBeDefined();
        expect(nftNumRatio).toBeDefined();
        expect(valueRatio).toBeDefined();
        // console.debug(holder);
      });
    });
  });
});

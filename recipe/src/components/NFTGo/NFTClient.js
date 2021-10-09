const NFTGO_API_V1_URL = 'https://api.nftgo.io/api/v1';
const COLLECTIONS_URL = `${NFTGO_API_V1_URL}/collections`;
const SYSTEM_URL = `${NFTGO_API_V1_URL}/system`;
const TOP_SALES_URL = `${NFTGO_API_V1_URL}/asset/top-sales`;

export const getHotCollection = (limit = 10, withStat = 1) => {
  return fetch(`${COLLECTIONS_URL}/hot?limit=${limit}&withStat=${withStat}`);
};

export const getBlockChains = () => {
  return fetch(`${SYSTEM_URL}/parameters`);
};

// REMARKS: timeSpan can be '24h' | '7d' | '30d'
export const getTopSales = (limit = 10, timesSpan = '24h') => {
  return fetch(
    `${TOP_SALES_URL}?limit=${limit}&timespan=${timesSpan}&cid=6125b9851722e60a4a7f864c`
  );
};

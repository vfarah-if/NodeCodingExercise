const NFTGO_API_V1_URL = 'https://api.nftgo.io/api/v1';
const COLLECTIONS_URL = `${NFTGO_API_V1_URL}/collections`;
const SYSTEM_URL = `${NFTGO_API_V1_URL}/system`;
const TOP_SALES_URL = `${NFTGO_API_V1_URL}/asset/top-sales`;
const LATEST_DEAL_URL = `${NFTGO_API_V1_URL}/asset/latestdeal`;
const RECENTLY_CREATED_URL = `${NFTGO_API_V1_URL}/assets/recently-created`;

// TODO: Refactor pagination into default options
// TODO: Remove duplication where possible

export const getHotCollection = (limit = 10, withStat = 1) => {
  return fetch(`${COLLECTIONS_URL}/hot?limit=${limit}&withStat=${withStat}`);
};

export const getBlockChains = () => {
  return fetch(`${SYSTEM_URL}/parameters`);
};

// REMARKS: timeSpan can be '24h' | '7d' | '30d'
export const getTopSales = (
  limit = 10,
  timesSpan = '24h',
  cid = '6125b9851722e60a4a7f864c',
  offset = 0
) => {
  return fetch(
    `${TOP_SALES_URL}?limit=${limit}&timespan=${timesSpan}&cid=${cid}&offset=${offset}`
  );
};

export const getLatestDeal = (
  limit = 10,
  cid = '6125b9851722e60a4a7f864c',
  offset = 0
) => {
  return fetch(`${LATEST_DEAL_URL}?limit=${limit}&cid=${cid}&offset=${offset}`);
};

export const getRecentlyCreated = (
  limit = 10,
  withCollection = 1,
  cid = '6125b9851722e60a4a7f864c',
  offset = 0
) => {
  return fetch(
    `${RECENTLY_CREATED_URL}?limit=${limit}&withCollection=${withCollection}&cid=${cid}&offset=${offset}`
  );
};

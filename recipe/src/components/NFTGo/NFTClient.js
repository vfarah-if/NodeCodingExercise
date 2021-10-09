const NFTGO_API_V1_URL = 'https://api.nftgo.io/api/v1';
const COLLECTIONS_URL = `${NFTGO_API_V1_URL}/collections`;
const SYSTEM_URL = `${NFTGO_API_V1_URL}/system`;
const TOP_SALES_URL = `${NFTGO_API_V1_URL}/asset/top-sales`;
const LATEST_DEAL_URL = `${NFTGO_API_V1_URL}/asset/latestdeal`;
const RECENTLY_CREATED_URL = `${NFTGO_API_V1_URL}/assets/recently-created`;
const TRADING_HISTORY_URL = `${NFTGO_API_V1_URL}/asset/trading-history`;
const TOP_HOLDERS_URL = `${NFTGO_API_V1_URL}/ranking/coll-holder`;

const DEFAULT_LIMIT = 10;
const DEFAULT_OFFSET = 0;
const DEFAULT_PAGINATION_OPTIONS = {
  limit: DEFAULT_LIMIT,
  offset: DEFAULT_OFFSET,
};

// TODO: Remove duplication where possible

export const getBlockChains = () => {
  return fetch(`${SYSTEM_URL}/parameters`);
};

export const getHotCollection = (
  withStat = 1,
  paginationOptions = DEFAULT_PAGINATION_OPTIONS
) => {
  return fetch(
    `${COLLECTIONS_URL}/hot?limit=${
      paginationOptions?.limit || DEFAULT_LIMIT
    }&offset=${paginationOptions?.offset || DEFAULT_OFFSET}
    &withStat=${withStat}`
  );
};

// REMARKS: timeSpan can be '24h' | '7d' | '30d'
export const getTopSales = (
  timesSpan = '24h',
  cid = '6125b9851722e60a4a7f864c',
  paginationOptions = DEFAULT_PAGINATION_OPTIONS
) => {
  return fetch(
    `${TOP_SALES_URL}?timespan=${timesSpan}&cid=${cid}&limit=${
      paginationOptions?.limit || DEFAULT_LIMIT
    }&offset=${paginationOptions?.offset || DEFAULT_OFFSET}`
  );
};

export const getLatestDeal = (
  cid = '6125b9851722e60a4a7f864c',
  paginationOptions = DEFAULT_PAGINATION_OPTIONS
) => {
  return fetch(
    `${LATEST_DEAL_URL}?cid=${cid}&limit=${
      paginationOptions?.limit || DEFAULT_LIMIT
    }&offset=${paginationOptions?.offset || DEFAULT_OFFSET}`
  );
};

export const getRecentlyCreated = (
  withCollection = 1,
  cid = '6125b9851722e60a4a7f864c',
  paginationOptions = DEFAULT_PAGINATION_OPTIONS
) => {
  return fetch(
    `${RECENTLY_CREATED_URL}?withCollection=${withCollection}&cid=${cid}&limit=${
      paginationOptions?.limit || DEFAULT_LIMIT
    }&offset=${paginationOptions?.offset || DEFAULT_OFFSET}`
  );
};

export const getTradingHistory = (
  cid = '6125b9851722e60a4a7f864c',
  paginationOptions = DEFAULT_PAGINATION_OPTIONS
) => {
  return fetch(
    `${TRADING_HISTORY_URL}/${cid}?limit=${
      paginationOptions?.limit || DEFAULT_LIMIT
    }&offset=${paginationOptions?.offset || DEFAULT_OFFSET}`
  );
};

export const getTopHolders = (
  cid = '6125b9851722e60a4a7f864c',
  paginationOptions = DEFAULT_PAGINATION_OPTIONS
) => {
  return fetch(
    `${TOP_HOLDERS_URL}?id=${cid}&limit=${
      paginationOptions?.limit || DEFAULT_LIMIT
    }&offset=${paginationOptions?.offset || DEFAULT_OFFSET}`
  );
};

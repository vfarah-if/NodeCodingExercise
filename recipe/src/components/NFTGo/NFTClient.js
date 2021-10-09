const NFTGO_API_V1_URL = 'https://api.nftgo.io/api/v1';
const COLLECTIONS_URL = `${NFTGO_API_V1_URL}/collections`;
const SYSTEM_URL = `${NFTGO_API_V1_URL}/system`;
const SYSTEM_PARAMETERS_URL = `${SYSTEM_URL}/parameters`;
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

const getPaginatedData = (url, paginationOptions, paginationOnly = false) => {
  const urlQueryOptions = paginationOnly ? '?' : '&';
  return fetch(
    `${url}${urlQueryOptions}limit=${
      paginationOptions?.limit || DEFAULT_LIMIT
    }&offset=${paginationOptions?.offset || DEFAULT_OFFSET}`
  );
};

export const getBlockChains = () => {
  return fetch(SYSTEM_PARAMETERS_URL);
};

export const getHotCollection = (
  withStat = 1,
  paginationOptions = DEFAULT_PAGINATION_OPTIONS
) => {
  return getPaginatedData(
    `${COLLECTIONS_URL}/hot?withStat=${withStat}`,
    paginationOptions
  );
};

// REMARKS: timeSpan can be '24h' | '7d' | '30d'
export const getTopSales = (
  timesSpan = '24h',
  cid = '6125b9851722e60a4a7f864c',
  paginationOptions = DEFAULT_PAGINATION_OPTIONS
) => {
  return getPaginatedData(
    `${TOP_SALES_URL}?timespan=${timesSpan}&cid=${cid}`,
    paginationOptions
  );
};

export const getLatestDeal = (
  cid = '6125b9851722e60a4a7f864c',
  paginationOptions = DEFAULT_PAGINATION_OPTIONS
) => {
  return getPaginatedData(`${LATEST_DEAL_URL}?cid=${cid}`, paginationOptions);
};

export const getRecentlyCreated = (
  withCollection = 1,
  cid = '6125b9851722e60a4a7f864c',
  paginationOptions = DEFAULT_PAGINATION_OPTIONS
) => {
  return getPaginatedData(
    `${RECENTLY_CREATED_URL}?withCollection=${withCollection}&cid=${cid}`,
    paginationOptions
  );
};

export const getTradingHistory = (
  cid = '6125b9851722e60a4a7f864c',
  paginationOptions = DEFAULT_PAGINATION_OPTIONS
) => {
  return getPaginatedData(
    `${TRADING_HISTORY_URL}/${cid}`,
    paginationOptions,
    true
  );
};

export const getTopHolders = (
  cid = '6125b9851722e60a4a7f864c',
  paginationOptions = DEFAULT_PAGINATION_OPTIONS
) => {
  return getPaginatedData(`${TOP_HOLDERS_URL}?id=${cid}`, paginationOptions);
};

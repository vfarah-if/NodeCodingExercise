const NFTGO_API_V1_URL = 'https://api.nftgo.io/api/v1';
const COLLECTIONS_URL = `${NFTGO_API_V1_URL}/collections`;
const SYSTEM_URL = `${NFTGO_API_V1_URL}/system`;

export function getHotCollection(limit = 10, withStat = 1) {
  return fetch(`${COLLECTIONS_URL}/hot?limit=${limit}&withStat=${withStat}`);
}

export const getBlockChains = () => {
  return fetch(`${SYSTEM_URL}/parameters`);
};

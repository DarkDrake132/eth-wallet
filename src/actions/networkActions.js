import { getProvider } from "../utils/ethers";

export const chooseNetwork = (network) => {
  const provider = getProvider(network);
  return {
    type: "SET_NETWORK",
    payload: {
      network: network,
      provider: provider,
    },
  };
};

import { Wallet, providers, utils } from "ethers";

export const getProvider = (network) => {
  switch (network) {
    case "mainnet":
    case "ropsten":
    case "rinkeby":
      // case "kovan":
      // case "goerli":
      return new providers.InfuraProvider(network);
    default:
      return new providers.InfuraProvider("rinkeby");
  }
};

export const getWallet = (mnemonic, path) => {
  let wallet = Wallet.fromMnemonic(mnemonic, path);
  return wallet;
}
import { Wallet, providers, utils } from "ethers";
import { generateMnemonic } from "bip39";

export const getRandomMnemonic = () => {
  return generateMnemonic();
};

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
};

export const toEther = (balance) => {
  return utils.formatEther(balance);
};

export const parseEther = (value) => {
  return utils.parseEther(value);
}
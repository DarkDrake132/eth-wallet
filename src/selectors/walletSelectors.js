import { createSelector } from "reselect";

const selectWallet = (state) => state.walletReducer;

const makeSelectMnemonic = () =>
  createSelector(selectWallet, (state) => state.mnemonic);

const makeSelectIsConnected = () =>
  createSelector(selectWallet, (state) => state.isConnected);

const makeSelectWallet = () =>
  createSelector(selectWallet, (state) => state.currentWallet);

const makeSelectWalletList = () =>
  createSelector(selectWallet, (state) => state.walletList);

const makeSelectCurrentPage = () =>
  createSelector(selectWallet, (state) => state.currentPage);

export {
  selectWallet,
  makeSelectMnemonic,
  makeSelectIsConnected,
  makeSelectWallet,
  makeSelectWalletList,
  makeSelectCurrentPage,
};

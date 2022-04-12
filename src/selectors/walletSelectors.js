import { createSelector } from 'reselect';

const selectWallet = (state) => state.walletReducer;

const makeSelectWallet = () => createSelector(
  selectWallet,
  (state) => state.currentWallet,
);

const makeSelectWalletList = () => createSelector(
  selectWallet,
  (state) => state.walletList,
);

const makeSelectCurrentPage = () => createSelector(
  selectWallet,
  (state) => state.currentPage,
);

export {
  selectWallet,
  makeSelectWallet,
  makeSelectWalletList,
  makeSelectCurrentPage,
};
import { createSelector } from "reselect";

const selectNetwork = (state) => state.networkReducer;

const makeSelectNetwork = () =>
  createSelector(selectNetwork, (networkState) => networkState.network);

const makeSelectNetworkList = () =>
  createSelector(
    selectNetwork,
    (networkListState) => networkListState.networkList
  );

const makeSelectProvider = () =>
  createSelector(selectNetwork, (providerState) => providerState.provider);

export {
  selectNetwork,
  makeSelectNetwork,
  makeSelectNetworkList,
  makeSelectProvider,
};

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

  const makeSelectApiEndpoint = () =>
  createSelector(
    selectNetwork,
    (apiEndpointState) => apiEndpointState.apiEndpoint
  );

export {
  selectNetwork,
  makeSelectNetwork,
  makeSelectNetworkList,
  makeSelectProvider,
  makeSelectApiEndpoint,
};

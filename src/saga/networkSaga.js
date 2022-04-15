import { select, put, takeEvery } from "redux-saga/effects";

import { makeSelectNetwork } from "../selectors/networkSelectors";

const mainnetAPI = "https://api.etherscan.com";
const ropstenAPI = "https://api-ropsten.etherscan.com";
const rinkebyAPI = "https://api-rinkeby.etherscan.io/";

function* getNetworkAPIEndpoint() {
  const network = yield select(makeSelectNetwork());
  switch (network) {
    case "mainnet":
      yield put({
        type: "SET_NETWORK_API",
        payload: { apiEndpoint: mainnetAPI },
      });
      break;
    case "ropsten":
      yield put({
        type: "SET_NETWORK_API",
        payload: { apiEndpoint: ropstenAPI },
      });
      break;
    case "rinkeby":
      yield put({
        type: "SET_NETWORK_API",
        payload: { apiEndpoint: rinkebyAPI },
      });
      break;
    default:
      yield put({
        type: "SET_NETWORK_API",
        payload: { apiEndpoint: rinkebyAPI },
      });
  }
}

function* networkSaga() {
  yield takeEvery("SET_NETWORK", getNetworkAPIEndpoint);
}

export default networkSaga;

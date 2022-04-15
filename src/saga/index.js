import { all } from "redux-saga/effects";

import walletSaga from "./walletSaga";
import networkSaga from "./networkSaga";

export default function* rootSaga() {
  yield all([
    // saga1(),
    // saga2(),
    walletSaga(),
    networkSaga(),
  ]);
}

import { call, put, select, takeEvery } from "redux-saga/effects";

import { makeSelectProvider } from "../selectors/networkSelectors";
import {
  makeSelectCurrentPage,
  makeSelectMnemonic,
} from "../selectors/walletSelectors";

import { getWallet, toEther } from "../utils/ethers";

function* getWalletList() {
  const provider = yield select(makeSelectProvider());
  const currentPage = yield select(makeSelectCurrentPage());
  const mnemonic = yield select(makeSelectMnemonic());
  let walletList = [];
  const path = "m/44'/60'/0'/0/";
  if (mnemonic !== "") {
    for (let i = (currentPage - 1) * 5; i < currentPage * 5; i++) {
      let wallet = getWallet(mnemonic, path + i);
      let balance = 0;
      if (Object.keys(provider).length !== 0) {
        balance = yield call(
          provider.getBalance.bind(provider),
          wallet.address
        );
      }
      balance = toEther(balance);
      walletList.push({ wallet: wallet, balance: balance });
    }
  }
  yield put({ type: "SET_WALLET_LIST", payload: { walletList } });

  if (walletList.length > 0) {
    yield put({ type: "SET_CONNECTED", payload: { isConnected: true } });
  }
}

function* disconnectWallet() {
  yield put({ type: "SET_MNEMONIC", payload: { mnemonic: "" } });
  yield put({ type: "SET_CURRENT_PAGE", payload: { currentPage: 1 } });
  yield put({ type: "SET_CURRENT_WALLET", payload: { currentWallet: null } });
}

function* walletSaga() {
  yield takeEvery("SET_CURRENT_PAGE", getWalletList);
  yield takeEvery("SET_NETWORK", getWalletList);
  yield takeEvery("SET_MNEMONIC", getWalletList);
  yield takeEvery("SET_DISCONNECTED", disconnectWallet);
}

export default walletSaga;

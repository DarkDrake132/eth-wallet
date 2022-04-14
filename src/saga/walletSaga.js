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
      walletList.push({ address: wallet.address, balance: balance });
    }
  }
  yield put({ type: "SET_WALLET_LIST", payload: { walletList } });

  if (walletList.length > 0) {
    yield put({ type: "SET_CONNECTED", payload: { isConnected: true } });
  }
}

function* disconnectWallet() {
  yield put({ type: "SET_MNEMONIC", payload: { walletList: [] } });
  yield put({ type: "SET_CURRENT_PAGE", payload: { currentPage: 0 } });
}

function* walletSaga() {
  yield takeEvery("SET_CURRENT_PAGE", getWalletList);
  yield takeEvery("SET_NETWORK", getWalletList);
  yield takeEvery("SET_MNEMONIC", getWalletList);
  yield takeEvery("SET_DISCONNECTED", disconnectWallet);
  // yield takeEvery("WALLET_CREATE", createWallet);
  // yield takeEvery("WALLET_DELETE", deleteWallet);
  // yield takeEvery("WALLET_SELECT", selectWallet);
  // yield takeEvery("WALLET_UNLOCK", unlockWallet);
  // yield takeEvery("WALLET_LOCK", lockWallet);
  // yield takeEvery("WALLET_IMPORT", importWallet);
  // yield takeEvery("WALLET_EXPORT", exportWallet);
  // yield takeEvery("WALLET_CHANGE_PASSWORD", changePassword);
  // yield takeEvery("WALLET_GET_BALANCE", getBalance);
  // yield takeEvery("WALLET_GET_TRANSACTIONS", getTransactions);
  // yield takeEvery("WALLET_GET_TRANSACTION", getTransaction);
  // yield takeEvery("WALLET_GET_TRANSACTION_HISTORY", getTransactionHistory);
  // yield takeEvery("WALLET_GET_TRANSACTION_HISTORY_BY_DATE", getTransactionHistoryByDate);
  // yield takeEvery("WALLET_GET_TRANSACTION_HISTORY_BY_DATE_RANGE", getTransactionHistoryByDateRange);
  // yield takeEvery("WALLET_GET_TRANSACTION_HISTORY_BY_DATE_RANGE_AND_ADDRESS", getTransactionHistoryByDateRangeAndAddress);
  // yield takeEvery("WALLET_GET_TRANSACTION_HISTORY_BY_DATE_RANGE_AND_ADDRESS_AND_TYPE", getTransactionHistoryByDateRangeAndAddressAndType);
  // yield takeEvery("WALLET_GET_TRANSACTION_HISTORY_BY_DATE_RANGE_AND_ADDRESS_AND_TYPE_AND_STATUS", getTransactionHistoryByDateRangeAndAddressAndTypeAndStatus);
  // yield takeEvery("WALLET_GET_TRANSACTION_HISTORY_BY_DATE_RANGE_AND_ADDRESS_AND_TYPE_AND_STATUS_AND_AMOUNT", getTransactionHistoryByDateRangeAndAddressAndTypeAndStatusAndAmount);
  // yield takeEvery("WALLET_GET_TRANSACTION_
}

export default walletSaga;

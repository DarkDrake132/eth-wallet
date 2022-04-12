import { call, put, select, takeEvery } from "redux-saga/effects";

import { makeSelectProvider } from "../selectors/networkSelectors";
import { makeSelectCurrentPage } from "../selectors/walletSelectors";

import { getWallet } from "../utils/ethers";

function getBalance(provider, address) {
  return new Promise(function (resolve, reject) {
    provider.getBalance(address, (err, data) => {
      if (err !== null) return reject(err);
      return resolve(data);
    });
  });
}

function* getWalletList() {
  const provider = yield select(makeSelectProvider());
  const currentPage = yield select(makeSelectCurrentPage());
  let walletList = [];
  const path = "m/44'/60'/0'/0/";
  if (provider) {
    for (let i = currentPage * 5; i < (currentPage + 1) * 5; i++) {
      let wallet = getWallet(
        "peasant horror box announce galaxy excess put enhance require mesh endless advice",
        path + i
      );
      //let balance = yield call(getBalance, provider, wallet.address);
      walletList.push({ address: wallet.address });
    }
  }
  yield put({ type: "SET_WALLET_LIST", payload: { walletList } });
}

function* walletSaga() {
  yield takeEvery("SET_CURRENT_PAGE", getWalletList);
  yield takeEvery("SET_NETWORK", getWalletList);
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

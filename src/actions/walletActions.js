export const setMnemonic = (mnemonic) => {
  return {
    type: "SET_MNEMONIC",
    payload: {
      mnemonic: mnemonic,
    },
  };
};

export const setConnected = (isConnected) => {
  return {
    type: "SET_CONNECTED",
    payload: {
      isConnected: isConnected,
    },
  };
};

export const setDisconnected = (isConnected) => {
  return {
    type: "SET_DISCONNECTED",
    payload: {
      isConnected: isConnected,
    },
  };
};

export const setCurrentPage = (page) => {
  return {
    type: "SET_CURRENT_PAGE",
    payload: {
      currentPage: page,
    },
  };
};

export const setCurrentWallet = (wallet) => {
  return {
    type: "SET_CURRENT_WALLET",
    payload: {
      currentWallet: wallet,
    },
  };
};

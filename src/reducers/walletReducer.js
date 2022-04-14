const initialState = {
  mnemonic: "",
  isConnected: false,
  currentWallet: null,
  walletList: [],
  currentPage: 1,
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MNEMONIC":
      return {
        ...state,
        mnemonic: action.payload.mnemonic,
      };
    case "SET_CONNECTED":
      return {
        ...state,
        isConnected: action.payload.isConnected,
      };
    case "SET_DISCONNECTED":
      return {
        ...state,
        isConnected: action.payload.isConnected,
      };
    case "SET_CURRENT_WALLET":
      return {
        ...state,
        currentWallet: action.payload.currentWallet,
      };
    case "SET_WALLET_LIST":
      return {
        ...state,
        walletList: action.payload.walletList,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload.currentPage,
      };
    default:
      return state;
  }
};

export default walletReducer;

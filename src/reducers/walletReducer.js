const initialState = {
  currentWallet: null,
  walletList: [],
  currentPage: 0,
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
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

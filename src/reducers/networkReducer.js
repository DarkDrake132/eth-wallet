import { networks } from "../utils/network";

const initialState = {
    network: "",
    provider: {},
    networkList: networks,
}

const networkReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NETWORK":
      return {
        ...state,
        network: action.payload.network,
        provider: action.payload.provider,
      }
    default:
      return state;
  }
};

export default networkReducer;

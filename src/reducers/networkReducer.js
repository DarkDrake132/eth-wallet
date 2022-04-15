import { networks } from "../utils/network";

const initialState = {
  network: "",
  provider: {},
  networkList: networks,
  apiEndpoint: "",
};

const networkReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NETWORK":
      return {
        ...state,
        network: action.payload.network,
        provider: action.payload.provider,
      };
    case "SET_API_ENDPOINT":
      return {
        ...state,
        apiEndpoint: action.payload.apiEndpoint,
      };
    default:
      return state;
  }
};

export default networkReducer;

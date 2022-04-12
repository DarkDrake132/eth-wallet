import { combineReducers } from "redux";

import networkReducer from "./networkReducer";
import walletReducer from "./walletReducer";

export default combineReducers({
  networkReducer,
  walletReducer,
});

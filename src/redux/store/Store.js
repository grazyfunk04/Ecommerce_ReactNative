import { createStore } from "redux";
import reducers from "../reducers/Reducers";
import { combineReducers } from "redux";
import addressreducers from "../reducers/AddressReducers";
import reducers2 from "../reducers/Reducers2";
import orderreducers from "../reducers/OrderReducers";
const rootReducer = combineReducers({ reducers, reducers2, addressreducers, orderreducers });

const store = createStore(rootReducer);

export default store;

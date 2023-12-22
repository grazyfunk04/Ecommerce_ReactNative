import { createStore } from "redux";
import reducers from "../reducers/Reducers";

const store = createStore(reducers);

export default store;
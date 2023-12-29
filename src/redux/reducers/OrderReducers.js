import { ADD_ORDER, DELETE_ORDER } from "../ActionTypes";

const orderreducers = (state = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, action.payload];

    case DELETE_ORDER:
      const deletedArray = state.filter((item, index) => {
        return index !== action.payload;
      });

      return deletedArray;

    

    default:
      return state;
  }
};

export default orderreducers;
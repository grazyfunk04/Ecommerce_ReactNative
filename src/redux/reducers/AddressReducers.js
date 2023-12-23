import { ADD_ADDRESS, DELETE_ADDRESS } from "../ActionTypes";

const addressreducers = (state = [], action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return [...state, action.payload];

    case DELETE_ADDRESS:
      const deletedArray = state.filter((item, index) => {
        return index !== action.payload;
      });

      return deletedArray;

    

    default:
      return state;
  }
};

export default addressreducers;
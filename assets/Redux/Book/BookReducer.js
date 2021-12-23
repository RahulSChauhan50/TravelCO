import {setStartingStation, setFinalStation} from './BookActionTypes';

const initialState = {
  startingStation: null,
  finalStation: null,
};

const stationReducer = (state = initialState, action) => {
  switch (action.type) {
    case setStartingStation:
      return {
        ...state,
        startingStation: action.payload,
      };
    case setFinalStation:
      return {
        ...state,
        finalStation: action.payload,
      };
    default:
      return state;
  }
};

export default stationReducer;

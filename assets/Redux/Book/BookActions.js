import {setStartingStation, setFinalStation} from './BookActionTypes';

export const setStartingStationAction = parameter => {
  return {
    type: setStartingStation,
    payload: parameter,
  };
};

export const setFinalStationAction = parameter => {
  return {
    type: setFinalStation,
    payload: parameter,
  };
};

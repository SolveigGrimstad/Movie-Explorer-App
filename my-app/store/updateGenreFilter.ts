import { GENRE_UPDATED_FILTER, UPDATE_SORT } from "./store";

export type filterAction = {
  type: string;
  payload: string;
};

export type sortAction = {
  type: string;
  payload: string; 
}


//Reducer-funksjonen, initialiserer store.ts med tom liste
export function filterReducer(
  state: string[] = [],
  action: filterAction
) {
  switch (action.type) {
    case GENRE_UPDATED_FILTER:
      if (state.includes(action.payload)) {
        const newState = state.filter((f) => f != action.payload);
        return newState;
      }

      const newState = [...state, action.payload];
      return newState;
    default:
      return state;
  }
}

export function sortReducer(
  state: string = "Ratings",
  action: sortAction
) {
  switch (action.type) {
    case UPDATE_SORT:

      const newState =  action.payload;
      return newState;
    default:
      return state;
  }
}

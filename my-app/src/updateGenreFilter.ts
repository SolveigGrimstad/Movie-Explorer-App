import { GENRE_UPDATED_FILTER } from "./store/store";

export type filterAction = {
  type: string;
  payload: string;
};

//Reducer-funksjonen, initialiserer store.ts med tom liste
export default function filterReducer(
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
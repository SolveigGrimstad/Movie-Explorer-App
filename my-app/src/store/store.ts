import { createStore, combineReducers, Store } from "redux";
import filterReducer from "../updateGenreFilter";


export type AppState = {
  filter: string[];
};

export const GENRE_UPDATED_FILTER = "GENRE_UPDATED_FILTER";

export function updateGenreFilter(newFilter: string = "") {
  return {
    type: GENRE_UPDATED_FILTER,
    payload: newFilter,
  };
}

//Utility-funksjon for å kombinere flere reducere
const rootReducer = combineReducers<AppState>({
  filter: filterReducer,
});

function configureStore(): Store<AppState> {
  const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}

//Oppretter en store
export const store = configureStore();
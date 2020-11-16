import {filterReducer, sortReducer } from "../store/updateGenreFilter";
import { createStore, combineReducers, Store } from "redux";

/*
export type AppState = {
  filter: string[];
  sort: string; 
};
*/
export type AppState = ReturnType<typeof rootReducer>;

export const GENRE_UPDATED_FILTER = "GENRE_UPDATED_FILTER";
export const UPDATE_SORT = "UPDATE_SORT"; 

export function updateGenreFilter(newFilter: string = "") {
  return {
    type: GENRE_UPDATED_FILTER,
    payload: newFilter,
  };
}


export function updateSort(newSort: string = ""){
  return{
    type:UPDATE_SORT,
    payload: newSort,
  }
}


//Utility-funksjon for å kombinere flere reducere
const rootReducer = combineReducers({
  filter: filterReducer,
  sort: sortReducer,
});

function configureStore(){
  const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}

//Oppretter en store
export const store = configureStore();

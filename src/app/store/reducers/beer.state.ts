import * as beer from "../actions/beer.action";
import { Beer } from "@models/beer.model";


export interface BeerState {
  list: Array<Beer>,
  selected?: Beer
}

export const initializeState = (): BeerState => {
  return ({
    list: [],
  });
}

export function reducer(state: BeerState = initializeState(), action: beer.Actions): BeerState {
  switch (action.type) {
    case beer.SELECT:
      return {
        ...state,
        selected: action.payload
      }

    default: {
      return initializeState();
    }
  }
}

export const getList = (state: BeerState) => state.list;
export const getSelected = (state: BeerState) => state.selected;
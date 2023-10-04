import { ActionReducer, createSelector } from '@ngrx/store';
import * as fromBeer from './beer.state';
import * as fromUI from './ui.state';
import { UI } from "@models/ui.model";
import { combineReducers } from '@ngrx/store';

export interface State {
  ui: UI;
  beer: fromBeer.BeerState;
}

const reducers = {
  ui: fromUI.reducer,
  beers: fromBeer.reducer,
};

const productionReducer: ActionReducer<State> = combineReducers(reducers as any);

export function reducer(state: any, action: any) {
  return productionReducer(state, action);
}

export const getBeerState = (state: State) => state.beer;
export const getUIState = (state: State) => state.ui;

export const getSelectedBeer = createSelector(getBeerState, fromBeer.getSelected);
export const getBeerList = createSelector(getBeerState, fromBeer.getList);
export const getIsListOpen = createSelector(getUIState, fromUI.getIsListOpen);
export const getIsSearching = createSelector(getUIState, fromUI.getIsSearching);
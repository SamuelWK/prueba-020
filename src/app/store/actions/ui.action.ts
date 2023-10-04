import { Action } from '@ngrx/store';

export const setBeerListStatus = '[UI] Open/close BeerList';
export const setInputStatus = '[UI] set Search input status';

export class SetBeerListStatus implements Action {
    readonly type = setBeerListStatus;

    constructor(public payload: boolean) { }
}

export class SetInputStatus implements Action {
    readonly type = setInputStatus;

    constructor(public payload: boolean) { }
}

export type Actions = SetBeerListStatus | SetInputStatus;
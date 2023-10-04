import { Beer } from '@models/beer.model';
import { Action } from '@ngrx/store';

export const SEARCH = '[Beer] Search';
export const SELECT = '[Beer] Select';

export class SearchAction implements Action {
    readonly type = SEARCH;

    constructor(public payload: string) { }
}

export class SelectAction implements Action {
    readonly type = SELECT;

    constructor(public payload: Beer) { }
}

export type Actions = SearchAction | SelectAction;
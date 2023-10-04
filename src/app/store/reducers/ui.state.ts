import * as ui from "../actions/ui.action";
import { UI } from "@models/ui.model";

export const initializeState = (): UI => {
    return ({
        Home: {
            BeerList: { show: false },
            SearchInput: { searching: false }
        },
    });
}

export function reducer(state: UI = initializeState(), action: ui.Actions): UI {
  switch (action.type) {
    case ui.setBeerListStatus:
      return {
        ...state,
        Home: {
            ...state.Home,
            BeerList: {
                ...state.Home.BeerList,
                show: action.payload
            }
        }
      }
    
    case ui.setInputStatus:
      return {
        ...state,
        Home: {
            ...state.Home,
            SearchInput: {
              ...state.Home.SearchInput,
              searching: true
            }
        }
      }
    default: {
      return initializeState();
    }
  }
}

export const getIsSearching = (state: UI) => state?.Home?.SearchInput?.searching;
export const getIsListOpen = (state: UI) => state?.Home?.BeerList?.show;
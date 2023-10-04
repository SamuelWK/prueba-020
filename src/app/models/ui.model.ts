export interface SearchInput {
    searching: boolean;
}

export interface BeerList {
    show: boolean;
}

export interface Home {
    SearchInput: SearchInput,
    BeerList: BeerList
}

export interface UI {
    Home: Home;
}
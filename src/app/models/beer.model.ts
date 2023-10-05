export interface Amount {
    value: number;
    unit: string;
}

export interface Ingredient {
    name: string;
    amount: Amount;
}

export interface Beer {
    id: number;
    name: string;
    description: string;
    image_url: string;
    ingredients: {
        malt: Array<Ingredient>;
        hops: Array<Ingredient>;
    }
}
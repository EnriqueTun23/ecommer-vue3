export interface CartDetail {
    product: Product;
    quantity: number;
}

export interface Product {
    name: string,
    price: number,
    id: number,
    image: string,
}

export interface Categories {
    name: string,
    id: number,
}
export interface CartDetail {
    product: Product;
    quantity: number;
}

export interface Product {
    name: string,
    price: number,
    id: number,
    image: string,
    categoryId: number,
}

export interface Categories {
    name: string,
    id: number,
    descripcion: string,
}
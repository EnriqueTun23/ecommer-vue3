import type { Product } from '@/model/types';
import { defineStore } from  'pinia';

export const useProductsStore = defineStore('products',  {
    // Estados generales de productos
    state: () => ({
        categoryId: null as number | null,
        _products: [
            {
              id: 1,
              name: 'Monitor',
              price: 1600,
              image: 'https://m.media-amazon.com/images/I/91Fg-Dbk-eL._AC_UF894,1000_QL80_.jpg',
              categoryId: 1,
            },
            {
              id: 2,
              name: 'TV',
              price: 2000,
              image: 'https://m.media-amazon.com/images/I/91+tRvBTNkL.jpg',
              categoryId: 1,
            },
            {
              id: 3,
              name: 'Microndas',
              price: 1400,
              image: 'https://m.media-amazon.com/images/I/51tAf+Yd+dS._AC_UF894,1000_QL80_.jpg',
              categoryId: 2,
            },
            {
              id: 4,
              name: 'Licuadora',
              price: 200,
              image: 'https://cdn1.coppel.com/images/catalog/pm/1877473-1.jpg',
              categoryId: 2,
            },
            {
              id: 5,
              name: 'Pc de escritorio',
              price: 20000,
              image: 'https://ss628.liverpool.com.mx/xl/1134031898.jpg',
              categoryId: 1,
            },
            {
              id: 6,
              name: 'Laptop',
              price: 12000,
              image: 'https://deskcom.com.mx/wp-content/uploads/2021/05/IMG_9206.jpg',
              categoryId: 1,
            }
          ] as Product[]
    }),
    getters: {
      products(state) {
        if (!state.categoryId) {
          return state._products;
        }

        return state._products.filter(p => p.categoryId === state.categoryId)
      }
    },
    // Acciones 
    actions: {
      selectCategory(id: number) {
        this.categoryId = id
      }
    }
})
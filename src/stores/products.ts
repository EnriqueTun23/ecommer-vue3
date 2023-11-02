import type { Product } from '@/model/types';
import { defineStore } from  'pinia';

export const useProductsStore = defineStore('products',  {
    // Estados generales de productos
    state: () => ({
        order: '' as string,
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
        let products = null;
        // Filter
        if (state.categoryId) {
          products = state._products.filter(p => p.categoryId === state.categoryId)
        } else {
          products = state._products;
        }

        // order
        if (state.order === '') {
          return products;
        }

        if (state.order === 'price') {
          return products.sort((a, b) => a.price - b.price)
        }

        if (state.order === 'priceDesc') {
          return products.sort((a, b) => b.price - a.price)
        }

        if (state.order === 'name') {
          return products.sort((a, b) => a.name.localeCompare(b.name) )
        }

        if (state.order === 'nameDesc') {
          return products.sort((a, b) => b.name.localeCompare(a.name) )
        }
      }
    },
    // Acciones 
    actions: {
      selectCategory(id: number|null) {
        this.categoryId = id
      },
      orderByPrice() {
        this.order = 'price'
      },
      orderByPriceDesc() {
        this.order = 'priceDesc'
      },
      orderByName() {
        this.order = 'name'
      },
      orderByNameDesc() { 
        this.order = 'nameDesc'
      }
    }
})
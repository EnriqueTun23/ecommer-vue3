<script lang="ts">
// importacion del storage

import ProductCard from "./ProductCard.vue";

import type { Product } from "../model/types";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Monitor',
          price: 1600,
          image: 'https://m.media-amazon.com/images/I/91Fg-Dbk-eL._AC_UF894,1000_QL80_.jpg'
        },
        {
          id: 2,
          name: 'TV',
          price: 2000,
          image: 'https://m.media-amazon.com/images/I/91+tRvBTNkL.jpg'
        },
        {
          id: 3,
          name: 'Microndas',
          price: 1400,
          image: 'https://m.media-amazon.com/images/I/51tAf+Yd+dS._AC_UF894,1000_QL80_.jpg'
        },
        {
          id: 4,
          name: 'Licuadora',
          price: 200,
          image: 'https://cdn1.coppel.com/images/catalog/pm/1877473-1.jpg'
        },
        {
          id: 5,
          name: 'Pc de escritorio',
          price: 20000,
          image: 'https://ss628.liverpool.com.mx/xl/1134031898.jpg'
        },
        {
          id: 6,
          name: 'Laptop',
          price: 12000,
          image: 'https://deskcom.com.mx/wp-content/uploads/2021/05/IMG_9206.jpg'
        }
      ] as Product[]
    }
  }
};
</script>

<template>
    <v-row>
      <v-col v-for="p in products" :key="p.id" cols="4">
        <ProductCard :product="p" />
      </v-col>
    </v-row>
</template>

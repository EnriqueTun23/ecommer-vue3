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
        },
        {
          id: 2,
          name: 'TV',
          price: 2000,
        },
        {
          id: 3,
          name: 'Microndas',
          price: 1400,
        },
        {
          id: 4,
          name: 'Licuadora',
          price: 200,
        },
        {
          id: 5,
          name: 'Pc de escritorio',
          price: 20000,
        },
        {
          id: 6,
          name: 'Laptop',
          price: 12000,
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

<script lang="ts">
// importacion del storage
import { mapState } from 'pinia';
import { useProductsStore } from '../stores/products';

import ProductCard from "./ProductCard.vue";



export default {
  components: {
    ProductCard,
  },
  computed: {
    ...mapState(useProductsStore, ['products'])
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

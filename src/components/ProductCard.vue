<template>
  <v-card>
    <v-img
      :src="productImageUrl"
      height="200px"
      cover
    />
    <v-card-title>
        {{ product.name }}
    </v-card-title>
    <v-card-text> 
        <p class="mb-4">
            Precio demo
        </p>
        <v-chip>
           $ {{ product.price }} 
        </v-chip>
    </v-card-text>
    <v-card-action>
      <v-btn @click="addProduct" color="orange-lighten-2">Agregar</v-btn>
    </v-card-action>
  </v-card>
</template>

<script lang="ts">
import { useCartStore } from '../stores/cart';

import type { PropType } from 'vue';
import type { Product } from '../model/types';

export default {
  data() {
    return {
      count: 0,
    };
  },
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    }
  },
  computed: {
    productImageUrl() {
      return this.product.image ?? 'https://m.media-amazon.com/images/I/91Fg-Dbk-eL._AC_UF894,1000_QL80_.jpg'
    }
  },
  methods: {
    addProduct() {
      const castStore = useCartStore();
      castStore.addProduct(this.product)
    },
  },
  mounted() {
    console.log("el +valor inicial es", this.count);
  },
};
</script>

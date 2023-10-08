<script lang="ts">
import ProductCard from "./ProductCard.vue";
import CartComponent from "./CartComponent.vue";
export default {
  components: {
    ProductCard,
    CartComponent,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "monitor",
          price: 100,
        },
        {
          id: 2,
          name: "Laptop",
          price: 10000,
        },
        {
          id: 3,
          name: "tv",
          price: 100,
        },
      ],
    };
  },
};
</script>

<template>
    <v-row>
      <v-col v-for="p in products" :key="p.id" cols="4">
        <ProductCard :product="p" />
      </v-col>
    </v-row>
    <CartComponent />
</template>

<script setup lang="ts">
  import ProductList from '../components/ProductList.vue';
  import CategoryList from '../components/CategoryList.vue';

  import { onBeforeRouteUpdate,  } from 'vue-router';

  import { useProductsStore } from '../stores/products';

  const store = useProductsStore()

  onBeforeRouteUpdate((to, from) => {
    // Conversion del params  a entero
    const id = Number(to.params.id);
    // invocacion del estado al componente
    store.selectCategory(id)
  });

</script>

<template>
  <v-row>
    <v-col cols="2">
      <CategoryList />
    </v-col>
    <v-col cols="10">
      <ProductList />
    </v-col>
  </v-row>
</template>

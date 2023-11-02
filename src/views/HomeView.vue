<script lang="ts">
  import ProductList from '../components/ProductList.vue';
  import CategoryList from '../components/CategoryList.vue';
  import { useProductsStore } from '../stores/products';

  const updateCategory = (idParam: string | string[]) => {
    const store = useProductsStore();
    const id = Number(idParam)
    store.selectCategory(id)
  }

  export default {
    components: {
      ProductList,
      CategoryList
    },
    beforeRouteEnter(to) {
      updateCategory(to.params.id)
    },
    beforeRouteUpdate(to) {
      updateCategory(to.params.id)
    }

  }

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

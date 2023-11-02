<script lang="ts">
import CategoryOptions from './left/CategoryOptions.vue';

import OrderOptions from "./left/OrderOptions.vue";


export default {
  components: {
    OrderOptions,
    CategoryOptions
  },
  
};
</script>
<template>
  <v-sheet rounded="lg">
    <v-list rounded="lg">
      <CategoryOptions />
      <v-divider class="my-2"></v-divider>
      <OrderOptions />
    </v-list>
  </v-sheet>
</template>

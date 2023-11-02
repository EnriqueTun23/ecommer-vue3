<script lang="ts">
import { mapActions, mapState } from "pinia";
import { useProductsStore } from "../../stores/products";

export default {
  methods: {
    ...mapActions(useProductsStore, ['orderByName', 'orderByPrice', 'orderByPriceDesc', 'orderByNameDesc' ])
  },
  computed: {
    ...mapState(useProductsStore, ['order'])
  }
};
</script>
<template>
  <v-list-subheader>Filtros</v-list-subheader>
  <v-list-item link @click="orderByPrice" :active="order === 'price'">
    <v-list-item-title> Por precio (menor a mayor)</v-list-item-title>
  </v-list-item>
  <v-list-item link @click="orderByPriceDesc" :active="order === 'priceDesc'">
    <v-list-item-title> Por precio (mayor a menor)</v-list-item-title>
  </v-list-item>
  <v-list-item link @click="orderByName" :active="order === 'name'">
    <v-list-item-title> Por nombre (A-Z)</v-list-item-title>
  </v-list-item>
  <v-list-item link @click="orderByNameDesc" :active="order === 'nameDesc'">
    <v-list-item-title> Por nombre (Z-A)</v-list-item-title>
  </v-list-item>
</template>

<script lang="ts">
import { mapState } from "pinia";
import { useCategoriesStore } from "../../stores/categories";
export default {
  computed: {
    ...mapState(useCategoriesStore, ["categories"]),
  },
  methods: {
    selectCategory(id: number) {
      this.$router.push({
        name: "category",
        params: { id },
      });
    },
    clearCategory() {
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>

<template>
  <v-list-subheader>Categorias</v-list-subheader>
  <v-list-item link @click="clearCategory" :active="$route.name === 'home'">
    <v-list-item-title> Todas </v-list-item-title>
  </v-list-item>
  <v-list-item
    v-for="c in categories"
    :key="c.id"
    link
    :active="$route.name === 'category' && Number($route.params.id) === c.id"
    @click="selectCategory(c.id)"
  >
    <v-list-item-title>{{ c.name }}</v-list-item-title>
  </v-list-item>
</template>

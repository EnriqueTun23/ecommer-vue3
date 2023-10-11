<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useCartStore } from "../stores/cart";
const store = useCartStore();
</script>

<template>
  <v-app-bar flat>
    <v-container class="mx-auto d-flex align-center justify-center">
      <v-avatar class="me-4" size="32">
        <v-img src="https://e7.pngegg.com/pngimages/324/868/png-clipart-online-shopping-e-commerce-retail-digital-marketing-e-commerce-text-retail-thumbnail.png" />
      </v-avatar>
      <RouterLink to="/" custom v-slot="{ navigate }">
        <v-btn prepend-icon="mdi-home-variant" :active="$route.name === 'home'" variant="text" @click="navigate"
          >Home</v-btn
        >
      </RouterLink>
      <RouterLink to="/cart" custom v-slot="{ navigate }">
        <v-badge
          :content="store.cartItemsCount"
          :model-value="store.cartItemsCount > 0"
          color="orange-lighten-2"
        >
          <v-btn
            prepend-icon="mdi-cart"
            :active="$route.name === 'cart'"
            variant="text"
            @click="navigate"
            >Card</v-btn
          >
        </v-badge>
      </RouterLink>
      <RouterLink to="/about" custom v-slot="{ navigate }">
        <v-btn
          prepend-icon="mdi-information"
          :active="$route.name === 'about'"
          variant="text"
          @click="navigate"
          >About</v-btn
        >
      </RouterLink>

      <v-spacer></v-spacer>

      <v-responsive max-width="160">
        <v-text-field
          density="compact"
          flat
          hide-details
          label="Search"
          rounded="lg"
          single-line
          variant="solo-filled"
        ></v-text-field>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>

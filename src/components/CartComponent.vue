<script lang="ts">
import { RouterLink } from "vue-router";
import { mapState } from "pinia";

import CardItem from "./CardItem.vue";

import { useCartStore } from "../stores/cart";
export default {
  components: {
    RouterLink,
    CardItem,
  },
  computed: {
    ...mapState(useCartStore, ["details"]),
  },
};
</script>
<template>
  <v-card>
    <v-card-title> Producto agregado al carrito </v-card-title>
    <v-card-text>
      <v-table v-if="details.length > 0">
        <thead>
            <tr>
                <th class="text-left">Producto</th>
                <th class="text-center">Cantidad</th>
                <th class="text-left">Precio</th>
                <th class="text-left">Subtotal</th>
                <th class="text-left"><span class="d-sr-only">Eliminar</span></th>
            </tr>
        </thead>
        <tbody>
            <CardItem v-for="d in details" :key="d.product.id" :detail="d" />    
        </tbody>
    </v-table>
      <p v-else>
        Aún no has agregado productos a tu carrito de compras. Haz
        <RouterLink to="/">click aqui</RouterLink> para ver los productos
        disponibles
      </p>
    </v-card-text>
  </v-card>
</template>

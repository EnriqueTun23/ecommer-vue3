<script lang="ts">
import type { PropType } from "vue";
import { mapActions } from "pinia";

import { useCartStore } from "../stores/cart";
import type { CartDetail } from "../model/types";

export default {
  props: {
    detail: {
      type: Object as PropType<CartDetail>,
      require: true,
      default: () => ({ product: { id: 0, name: "" }, quantity: 0 }),
    },
  },
  methods: {
    // importacion de acciones
    ...mapActions(useCartStore, {
      decrementQuantity: "decrement",
      incrementQuantity: "increment",
      deleteProduct: "delete",
    }),
  },
  computed: {
    productImageUrl() {
      return (
        this.detail.product.image ??
        "https://m.media-amazon.com/images/I/91Fg-Dbk-eL._AC_UF894,1000_QL80_.jpg"
      );
    },
    subTotal() {
      return this.detail.product.price * this.detail.quantity;
    }
  },
};
</script>
<template>
  <tr>
    <td>
      <v-avatar size="40px">
        <v-img :src="productImageUrl" />
      </v-avatar>
      {{ detail.product.name }}
    </td>
    <td class="text-center">
      <v-btn
        class="ml-2"
        size="x-small"
        @click="decrementQuantity(detail.product.id)"
        icon="mdi-minus"
      />
      {{ detail?.quantity }}
      <v-btn
        size="x-small"
        @click="incrementQuantity(detail.product.id)"
        icon="mdi-plus"
      />
    </td>
    <td>
      ${{ detail.product.price }}
    </td>
    <td>
      ${{ subTotal }}
    </td>
    <td>  
      <v-btn
        class="ml-2"
        size="x-small"
        @click="deleteProduct(detail.product.id)"
        icon="mdi-delete"
      />
    </td>
  </tr>
</template>

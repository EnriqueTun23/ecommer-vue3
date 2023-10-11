<script setup lang="ts">
import { useCartStore } from "../../stores/cart";
const store = useCartStore();

</script>
<template>
    <v-card>
        <v-card-title>
            Resumen de la compra
        </v-card-title>
        <v-card-subtitle>
            Total a pagar: $ {{ store.totalAmount }}
        </v-card-subtitle>
        <v-card-text>
            <v-btn variant="tonal"  color="orange-lighten-2">
                Realizar pedido
            </v-btn>
        </v-card-text>
    </v-card>
</template>
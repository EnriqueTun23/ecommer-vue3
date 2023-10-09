<script lang="ts">
import { useCartStore } from '../stores/cart';

export default {
    computed: {
        details() {
            const cartStore = useCartStore();
            return cartStore.details;
        }
    }
}

</script>
<template>
    <v-card class="mt-6">
        <v-card-text>
            <p>Producto agregado al carrito:</p>
            <v-list>
                <v-list-item v-for="d in details" :value="d.productId" :key="d.productId">
                    <v-list-item-title>
                        id: {{ d.productId }} cantidad ({{ d.quantity }})
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>
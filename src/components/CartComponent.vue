<script lang="ts">
import { RouterLink } from "vue-router";
import { useCartStore } from '../stores/cart';
const cartStore = useCartStore();
export default {
    components: {
        RouterLink
    },
    computed: {
        details() {
            return cartStore.details;
        }
    },
    methods: {
        decrementQuantity(id: number) {
            cartStore.decrement(id);
        },
        incrementQuantity(id: number) {
            cartStore.increment(id)
        },
        deleteProduct(id: number) {
            cartStore.delete(id)
        }
    }
}

</script>
<template>
    <v-card class="mt-6">
        <v-card-title>
            Producto agregado al carrito
        </v-card-title>
        <v-card-text>
            <v-list v-if="details.length > 0">
                <v-list-item v-for="d in details" :value="d.productId" :key="d.productId">
                    <v-list-item-title>
                        id: {{ d.productId }} 
                        <v-btn class="ml-2" size="x-small" @click="decrementQuantity(d.productId)" icon="mdi-minus"  />                        
                        Cantidad ({{ d.quantity }})
                        <v-btn size="x-small" @click="incrementQuantity(d.productId)" icon="mdi-plus" />
                        <v-btn class="ml-2" size="x-small" @click="deleteProduct(d.productId)" icon="mdi-delete" />
                    </v-list-item-title>
                </v-list-item>
            </v-list>
            <p v-else>
                Aún no has agregado productos a tu carrito de compras.
                Haz <RouterLink to="/">click aqui</RouterLink> para ver los productos disponibles
            </p>
        </v-card-text>
    </v-card>
</template>
<script lang="ts">
    import CartComponent from "../components/CartComponent.vue";
    import Summarycard from '../components/cart/SummaryCard.vue';

    export default {
        components: {
            CartComponent,
            Summarycard,
        }
    }
</script>
<template>
    <v-row>
        <v-col cols="8">
            <CartComponent />
        </v-col>
        <v-col cols="4">
            <Summarycard />
        </v-col>
    </v-row>
</template>
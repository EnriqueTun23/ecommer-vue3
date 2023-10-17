<script lang="ts">

import type {Categories} from '../model/types';
export default  {
    data() {
        return {
            categories: [
                {
                    id: 1,
                    name: 'Tecnologia',
                    descripcion: 'Producto tecnologicos'
                },
                {
                    id: 2,
                    name: 'Electrodomesticos',
                    descripcion: 'Producto para el hogar'
                }
            ] as Categories[],
        }
    },
    methods: {
        selectCategory(id: number) {
            this.$router.push({ 
                name: 'category',
                params: { id }
             })
        }
    }
}
</script>
<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">
            <v-list-item v-for="c in categories" :key="c.id" link @click="selectCategory(c.id)">
                <v-list-item-title>{{ c.name }}</v-list-item-title>
            </v-list-item>
            <v-divider class="my-2"></v-divider>
            <v-list-item link color="grey-lighten-4">
                <v-list-item-title>Ordenar por precio</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-sheet>
</template>
<script lang="ts">
import type {Categories} from '../model/types';
export default  {
    data() {
        return {
            categories: [
                {
                    id: 1,
                    name: 'Tecnologia',
                },
                {
                    id: 2,
                    name: 'Juguetes',
                }
            ] as Categories[],
        }
    }
}
</script>
<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">
            <v-list-item v-for="c in categories" :key="c.id" link>
                <v-list-item-title>{{ c.name }}</v-list-item-title>
            </v-list-item>
            <v-divider class="my-2"></v-divider>
            <v-list-item link color="grey-lighten-4">
                <v-list-item-title>Ordenar por precio</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-sheet>
</template>
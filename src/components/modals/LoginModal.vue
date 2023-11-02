<script setup lang="ts">
    import { ref } from 'vue';
    const dialog = ref(false);
</script>
<template>
    <v-dialog v-model="dialog" persistent scrollable max-width="80%">
        <v-card>
        <v-card-title>Demo</v-card-title>
        <v-divider></v-divider>
        <v-card-text height="200px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae quidem error mollitia cupiditate perspiciatis, odit voluptates, deleniti praesentium nihil inventore a ut, iure totam consequatur ad optio. Atque, dignissimos.</v-card-text>
      </v-card>
    </v-dialog>
</template>

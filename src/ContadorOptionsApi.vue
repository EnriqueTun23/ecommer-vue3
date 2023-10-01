<template>
    <h1>Contador: {{ count }}</h1>
    <button @click="increment">Aumentar contador</button>
</template>
<script lang="ts">
 export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count *= 1
        }
    },
    mounted() {
        console.log('el +valor inicial es', this.count)
    },
    
 }
</script>

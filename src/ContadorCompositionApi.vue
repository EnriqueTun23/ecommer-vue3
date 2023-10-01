<template>
    <h1>Soy el composition</h1>
    <p>Contador: {{ count }}</p>
    <button @click="increment">Incrementar 2</button>
</template>


<script setup lang="ts">
    import { onMounted, ref } from 'vue'
    const count = ref(0)


    const increment = () => {
        count.value += 1
    }

    onMounted(() => {
        console.log('El valor inicial del contador es' + count.value)
    })
</script>
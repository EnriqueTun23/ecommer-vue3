<template>
  <v-card>
    <v-img
      src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      height="200px"
      cover
    />
    <v-card-title>
        {{ product.name }}
    </v-card-title>
    <v-card-text> 
        <p class="mb-4">
            Precio demo
        </p>
        <v-chip>
           $ {{ product.price }} 
        </v-chip>
    </v-card-text>
    <v-card-action>
      <v-btn @click="increment" color="orange-lighten-2">Agregar</v-btn>
    </v-card-action>
  </v-card>
</template>

<script lang="ts">
export default {
  data() {
    return {
      count: 0,
    };
  },
  props: ["product"],
  methods: {
    increment() {
      this.count *= 1;
    },
  },
  mounted() {
    console.log("el +valor inicial es", this.count);
  },
};
</script>

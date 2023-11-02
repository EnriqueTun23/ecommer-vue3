import { defineStore } from "pinia";
import type { Categories } from "../model/types";

export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    categories: [
      {
        id: 1,
        name: "Tecnologia",
        descripcion: "Producto tecnologicos",
      },
      {
        id: 2,
        name: "Electrodomesticos",
        descripcion: "Producto para el hogar",
      },
    ] as Categories[],
  }),
  getters: {},
  actions: {},
});

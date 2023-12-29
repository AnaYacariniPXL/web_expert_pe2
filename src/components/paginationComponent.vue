<script >
export default {
  props: {
    huidigePagina: Number,
    productenPerPagina: Number,
    totalProducten: Number,
  },
  computed:{
    totalPages() {

      return Math.ceil(this.filteredProducts.length / this.huidigePagina);
    },

  },
  methods: {
    paginationProducten(pagina) {
      this.$emit('andere-pagina', pagina);
    },


  },
};
</script>

<template>
  <div class="pagination">
    <button @click="paginationProducten(huidigePagina - 1)" :disabled="huidigePagina === 1">
   Vorige
    </button>
    <span>{{ huidigePagina }}</span>
    <button @click="paginationProducten(huidigePagina + 1)" :disabled="huidigePagina * productenPerPagina >= totalProducten">
      Volgende
    </button>
  </div>
</template>

<style scoped>

</style>
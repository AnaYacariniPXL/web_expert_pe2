<script>
export default {
  methods: {
    selectCategorie(categorie) {
      this.$emit('categorie-selected', categorie);
    },
  },
};
</script>

<template>
  <input type="checkbox" id="filter-toggle" class="filter-checkbox">
  <label for="filter-toggle" class="filter-button">Filter</label>
  <div class="filter-opties">
    <button class="filter-optie" @click="selectCategorie('')">Alles</button>
    <button class="filter-optie" @click="selectCategorie('Poppen')">Poppen</button>
    <button class="filter-optie" @click="selectCategorie('Educatief')">Educatief</button>
    <button class="filter-optie" @click="selectCategorie('Voertuigen')">Voertuigen</button>
    <button class="filter-optie" @click="selectCategorie('Knuffels')">Knuffels</button>
    <button class="filter-optie" @click="selectCategorie('Houten speelgoed')">Houten speelgoed </button>
    <button class="filter-optie" @click="selectCategorie('Puzzles')">Puzzles</button>
    <button class="filter-optie" @click="selectCategorie('Buitenspeelgoed')">Buitenspeelgoed</button>
    <button class="filter-optie" @click="selectCategorie('Baby speelgoed')">Baby speelgoed</button>

  </div>
</template>

<style scoped>

</style>
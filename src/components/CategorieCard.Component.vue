<script >


export default {

name: "CategorieCardComponent",
  props:

      {
        producten:{
          type: Object
        },
        categorie:{
          type:Object,
          required:true
        },


      },

  methods:{
  selectedCategorie(){
    this.$router.push({name:'ProductenPerCategorie', params:{categorie: this.categorie.naam} })
    // this.$emit('category-selected', this.categorie.naam);
  },




  },
  computed: {
    aantalProductenOphalen() {
      const categorieNaam = this.categorie.naam;
      if (!categorieNaam || !this.producten) {
        return 0;
      }
      return this.producten.filter(product => product.categorie.naam === categorieNaam).length;
    },
  },
};
</script>

<template>

  <div class="card-categorie"  @click="selectedCategorie">
    <img :src="categorie.categorieImage.imageRoute" class="card-categorie-image" :alt="categorie.categorieImage.alt"/>
    <div class="card-categorie-body">
      <h4>{{ categorie.naam }}</h4>
      <p>{{aantalProductenOphalen }} producten</p>
    </div>
  </div>

</template>

<style scoped>

</style>
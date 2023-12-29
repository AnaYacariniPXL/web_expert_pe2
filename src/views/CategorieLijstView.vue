<script >
import CategorieCardComponent from "@/components/CategorieCard.Component.vue";

export default {
name: "CategorieLijst",
  components:{CategorieCardComponent },

 data(){
  return{
    aantalProducten: 0,
    // categories:[]
  };

 },
  inject:
  ['producten'],

// mounted() {
//   return this.categoriesOphalen;
// },

  computed:{
 categories(){
   const uniqueCategories = new Set(this.producten.map((product) => product.categorie.naam));
   return Array.from(uniqueCategories).map((naam) => ({
     naam,
     categorieImage: this.producten.find((product) => product.categorie.naam === naam).categorie.categorieImage,

   }));

  }

 },



}

</script>

<template>
  <main class="main">
<!--    <section class="kijker">-->


  <CategorieCardComponent  v-for="categorie in categories" :key="categorie.naam" :categorie="categorie" :producten="producten"/>


<!--    </section>-->
  </main>
</template>

<style scoped>

</style>
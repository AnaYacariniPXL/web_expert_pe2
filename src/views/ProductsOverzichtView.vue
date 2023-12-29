<script>

import ProductCardComponent from "@/components/ProductCardComponent.vue";
import ProductDetailView from "@/views/ProductDetailView.vue";
import FilterComponent from "@/components/FilterComponent.vue";
import PaginationComponent from "@/components/paginationComponent.vue";
import CategorieLijst from "@/views/CategorieLijstView.vue";

export default {
  name: "ProductsOverzichtView",
  components: {

    ProductCardComponent,
    ProductDetailView,
    FilterComponent,
    PaginationComponent,
    CategorieLijst,

  },

  props: {
  producten:{
    type: Array,
    required:true

  },
},
  data(){
    return{
      selectedCategorie:'',
      huidigePagina: 1,
      productenPerPagina: 8,
      title:'Speelgoed',
      text1:'bij Chunkito biedt kwalitatief en mooi speelgoed voor kinderen. Het spelen met het juiste speelgoed speelt een belangrijke rol in de cognitieve, sociale en emotionele ontwikkeling van kinderen. Daarom selecteren wij bij Chunkito zorgvuldig speelgoedmerken die aan onze hoge eisen voldoen',
      text2: "Wij vinden het belangrijk om speelgoed te bieden dat niet alleen uitstekend functioneert, maar ook aantrekkelijk en comfortabel is. Onze missie is om het allerbeste speelgoed aan te bieden voor kinderen die vol overgave spelen.",
      text3: "We selecteren alleen het beste speelgoed, zodat elke speelsessie een unieke en onvergetelijke ervaring is."
    }
  },
  methods:{
    selectCategorie(categorie){
      this.selectedCategorie = categorie;
      this.huidigePagina = 1;
    },
    handleAnderePagina(pagina){
      this.huidigePagina  = pagina
    }

  },
  computed: {
    filteredProducts() {
      if (this.selectedCategorie === '') {
        return this.producten;
      } else {
        return this.producten.filter((product) => product.categorie.naam === this.selectedCategorie);
      }
    },
  },

}
</script>

<template>
  <main class="main">
  <section class="kijker producten">
    <h3 class="main-heading">{{ title }}</h3>
    <p> {{text1 }}</p>
    <p>{{text2}}</p>
  <p>{{text3}}</p>


<!--    </div>-->
    <FilterComponent @categorie-selected="selectCategorie"></FilterComponent>
<!--    <div class="cards">-->
    <div class="cards" >
      <ProductCardComponent v-for="product in filteredProducts" :key="product.id" :product="product"   />
      </div>

    <PaginationComponent :huidigePagina="huidigePagina" :producten-per-pagina="productenPerPagina" :total-producten="filteredProducts.length" @andere-pagina="paginationProducten"/>


<!--</div>-->
  </section>

  <section class="popular-categorieen ">

    <h3>Alle categorieen</h3>
    <div class="cards-categorieen">


<CategorieLijst />
    </div>


  </section>
  </main>
</template>

<style scoped>

</style>
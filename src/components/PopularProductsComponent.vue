<script>


import ProductCardComponent from "@/components/ProductCardComponent.vue";

export default {
  components: ProductCardComponent,

  props:{
    title:String,
    producten: {
      type: Array,
      required:true
    }
  },

  computed:{
    popularProducten(){
      const sortedProducten = this.producten.sort((a, b) => b.stock - a.stock);
      return sortedProducten.slice(0, Math.min(5, Math.max(3, sortedProducten.length)));

    }
  }
}
</script>

<template>
  <section class="kijker">
    <h3 class="section-titel">Onze favorieten van het moment:</h3>
    <div class="cards">
      <div class="card" v-for="product in popularProducten" :key="product.id">
        <img :src="product.afbeelding" :alt="product.titel" />
        <div class="card-body">
          <router-link :to="{ path:'/producten/'+ product.id}">

            <h4 class="card-titel">{{product.titel }}</h4>
          </router-link>
          <p class="card-text">{{ product.omschrijving }} </p>

          <button class="card-button">Nu kopen</button>

        </div>

      </div>

<router-link to="/producten">
      <button type="button" class="main-button">Kijk alles &rarr;</button>
</router-link>
    </div>


  </section>
</template>

<style scoped>

</style>
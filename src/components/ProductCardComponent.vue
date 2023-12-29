<script>

import ProductDetailView from "@/views/ProductDetailView.vue";
import {useProductStore} from "@/stores/productenStore.js";

export default {
name:"ProductCardComponent",
components:{
  ProductDetailView,

},

  props:
      {
        product:{
          type:Object,
          required:true
        },

      },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product);
    },
  },

}
</script>

<template>


    <div class="card">
      <img :src="product.afbeelding" :alt="product.titel" />
      <div class="card-body">
        <router-link :to="{ path:'/producten/'+ product.id}">

        <h4 class="card-titel">{{product.titel }}</h4>
        </router-link>
        <p class="card-text">{{ product.omschrijving }} </p>

        <button class="card-button" @click="addToCart(product)">Nu kopen</button>

      </div>

    </div>


</template>

<style scoped>

</style>
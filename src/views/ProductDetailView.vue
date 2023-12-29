<script >
import { useProductStore } from '@/stores/productenStore.js';

export default {
  name: "ProductDetailView",

  data(){
    return{
    product:{},
      voorraadStatus: "op voorrad",
      aantalItemsCart:1,
      productToegevoegd: false
    }
    },

  props: {
    producten:{
      type: Object,
      required: true
    }
  },
  computed:{
VoorraadProduct(){
  return this.product.stock > 0 ? "Op voorraad" : "Niet op voorraad";
}
  },
  methods:{

    addToCart() {
      useProductStore().addToCart({ product: this.product, quantity: this.aantalItemsCart });
      this.productToegevoegd = true;
    },
  },

created() {
  this.id = this.$route.params.id;
 this.product = this.producten.find(product => product.id === parseInt(this.id))
},

}
</script>

<template>
  <main class="main"  >
    <div class=" product-info">
      <div class="product-info-image">
        <img :src="product.afbeelding" :alt="product.titel"/>

      </div>
      <div class="product-info-body">
        <div>
          <h1 class="main-heading">{{ product.titel }}</h1>
          <p>{{product.omschrijving}}</p>
        </div>
        <div class="product-info-price">
          <h2 class="product-info-prijs">{{ product.prijs }}€</h2>
<!--          <p class="product-info-voorraad" v-if="productToegevoegd">Op voorraad</p>-->
          <p class="product-info-voorraad" v-if="VoorraadProduct" >{{product.stock }}</p>
          <p class="product-info-voorraad" v-if="VoorraadProduct" >{{ voorraadStatus }}</p>
          <p class="product-info-voorraad" v-else="VoorraadProduct" >{{ voorraadStatus }}</p>
<!--          <p class="product-info-voorraad" v-if="voorraadStatus === 'Niet op voorraad'" >Dit product is niet op voorraad</p>-->
        </div>

        <div class="product-winkelmandje">
          <div class="aantal-producten">
            <label for="hoeveelheid"></label>
            <input type="number" id="hoeveelheid" name="hoeveelheid" v-model="aantalItemsCart" min="1">
            <button class="main-button">-</button>
            <button class="main-button ">+</button>
          </div>

          <button type="button" class="main-button" @click="addToCart">In winkelmandje</button>
        </div>

        <div class="product-info-detail ">
          <h3>Specificaties</h3>
          <h4>Product</h4>

          <table class="info-table">

            <tbody>
            <tr>
              <td>Artikelnummer:</td>
              <td>{{ product.id }}</td>
            </tr>
            <tr>
              <td>EAN</td>
              <td>8712051107288</td>
            </tr>
            <tr>
              <td>Dimensions:</td>
              <td>{{ product.dimensions }}</td>
            </tr>
            <tr>
              <td>Gewicht:</td>
              <td>{{ product.gewicht }}</td>
            </tr>
            <tr>
              <td>BTW</td>
              <td>{{ product.btw }} %</td>
            </tr>
            </tbody>
          </table>

        </div>

      </div>


    </div>
  </main>
</template>

<style scoped>

</style>
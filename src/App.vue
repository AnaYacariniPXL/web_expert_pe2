<script>
import NavigatieComponent from "@/components/NavigatieComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import productenLijst from "@/data/products.json";
import ProductCardComponent from "@/components/ProductCardComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";






export default {
  data() {
    return {
      titel: "",
      subtitle: "",
      producten:productenLijst
    }
  },
  components:{
    NavigatieComponent,
    AboutComponent,
    ProductCardComponent,

    FooterComponent,

  },
  mounted() {
 this.productenOpladen();
 //    return this.producten
  },
provide(){
return{
  producten: this.producten
}
},
  methods:{
    productenOpladen(){
     return this.producten
    }
  },

}


</script>

<template>

<NavigatieComponent ></NavigatieComponent>
  <router-view :producten="producten"> </router-view>
  <router-view :aanmelden ="aanmelden"></router-view>
  <router-view :cart="cart"> </router-view>
<!--<main class="main">-->



<!--</main>-->


<FooterComponent></FooterComponent>
</template>

<style scoped>

</style>

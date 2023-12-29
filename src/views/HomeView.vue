<script>
import AboutComponent from "@/components/AboutComponent.vue";
import PopularProductsComponent from "@/components/PopularProductsComponent.vue";
import ProductCardComponent from "@/components/ProductCardComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import NavigatieComponent from "@/App.vue";
import BannerComponent from "@/components/BannerComponent.vue";


export default {
  components: {
    BannerComponent,
    NavigatieComponent,
    HeaderComponent,
    AboutComponent,
    PopularProductsComponent,
    ProductCardComponent,
    ContactComponent,

  },

  data() {
    return {
      titel: "Play is the work of the child",
      subtitle: "",
      popularProducten: [],

    }
  },
  props: {
    producten: {
      type: Object
    }
  }, computed: {
    popularProductsTitle() {
      return "Populaire Producten";
    },


  },
}

</script>

<template>
<!--<NavigatieComponent></NavigatieComponent>-->
  <BannerComponent></BannerComponent>
  <main class="main">

    <AboutComponent/>
<PopularProductsComponent  :title="popularProductsTitle" :producten="producten"/>
    <ContactComponent/>

  </main>

</template>

<style scoped>

</style>
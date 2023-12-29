<script >
// import NavigatieComponent from "@/components/NavigatieComponent.vue";
import BannerComponent from "@/components/BannerComponent.vue";

export default {

  components:{
    // NavigatieComponent,
    BannerComponent
  },
data(){
    return{
      titel: "",
      subtitle: "",
    }
}
}

</script>

<template>
  <header class="header">
  <NavigatieComponent/>

  </header>
</template>

<style scoped>

</style>
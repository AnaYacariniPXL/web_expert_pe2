<script>
export default{
  data(){
    return{
      titel:"ROLLENSPEL SPEELGOED IS LEERRIJK EN LEUK",
      aboutText:"Spelen is een serieuze zaak! Speelgoed is niet alleen leuk, het is ook cruciaal voor de algemene  ontwikkeling van je kinderen. Samen met de kleine schat duikt je kind moeiteloos in een wondere wereld van spel en plezier. Hier kan de speeltijd écht beginnen!",
      aboutImage: {
        "path": "src/assets/images/caleb-angel-Hq32VUY0xMg-unsplash.jpg",
        "alt" : "foto kind met een lego"
      },
    }

  }
}
</script>

<template>
  <section class="section about">
    <div class="section-info">
      <h3 class="section-titel">{{ titel }}</h3>
      <p class="about-text">{{aboutText }}</p>
    </div>
    <div class="section-image">
      <img :src="aboutImage.path"  :alt="aboutImage.alt" />
    </div>
    <div class="bg-transition">
    </div>
  </section>
</template>

<style scoped>

</style>
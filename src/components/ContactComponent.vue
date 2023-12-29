<script>

export default{
  data(){
    return{
      titel:"Neem contact op",
      subtitel:"",
      contactImage:{
        "path": "src/assets/images/mel-poole-__WG73-dRmM-unsplash.jpg",
        "alt": "contact section foto"
      },
      contactText:"Zo kan je ons steeds bereiken via verschillende kanalen en dit voor gewone, maar ook speciale vragen:<span>info@chunkito.be</span> Of praat je liever direct met ons, dan kan je steeds bellen op <span>+32 (0)11 396 598</span>",
      buttonText: "Info "

    }
  }
}


</script>

<template>
  <section class="section contact">
    <div class="section-info">
      <h3 class="section-titel">{{ titel}}</h3>
      <p class="about-text">{{ subtitel }}</p>
      <p>{{contactText}}</p>
      <router-link to="'/:notFound(.*)' ">
      <button class="main-button">{{ buttonText }}</button>
      </router-link>
    </div>
    <div class="section-image">
      <img :src="contactImage.path" :alt="contactImage.alt" />
    </div>

  </section>
</template>

<style scoped>

</style>
<script>

export default {
  data(){
    return{
      titel: "Play is the work of the child",
      subtitel: "Kids store"
    }

  }
}

</script>

<template>
  <div class="header-banner">

    <h1 class="main-heading">{{ titel }}</h1>
    <h3 class="sub-heading">{{ subtitel }} </h3>
<router-link to="/producten"> <button type="button" class="main-button"> Ontdekt</button> </router-link>

  </div>
</template>

<style scoped>

</style>
<script >

export default  {

  data(){
    return{
      navItems:[
        {
          path: '/producten',
          name: 'Producten',
        },
        {
          path: '/login',
          name: 'Aanmelden',
        },
        {
          path: '/cart',
          name: 'Winkelmandje',
        },

      ]
    }
  }

}
</script>

<template>
  <nav class="nav">

    <router-link to="/" class="logo"><img src="@/assets/images/logo-pe.png" alt="logo"/></router-link>
    <ul class="header-nav" >
      <li class=" header-nav-item" v-for="navItem in navItems">
        <router-link :to="navItem.path" >{{navItem.name}}</router-link></li>
    </ul>
<!--    <ul class="header-nav">-->

<!--      <li class=" header-nav-item"><router-link to="/producten" > Producten</router-link></li>-->
<!--      <li  class=" header-nav-item"><router-link to="/login">Aanmelden</router-link></li>-->
<!--      <li  class=" header-nav-item"><router-link to="/cart">Winkelmandje</router-link></li>-->
<!--    </ul>-->
  </nav>
</template>

<style>

</style>
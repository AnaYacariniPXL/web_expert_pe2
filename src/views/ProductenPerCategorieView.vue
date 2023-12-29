<script >
import productCardComponent from "@/components/ProductCardComponent.vue";


export default {
  components:{
    productCardComponent
  },

  data() {
    return {
      selectedCategory: '',
    };
  },
  props:{
    producten:{
    type:Object,
    required: true
    }
  },
  computed: {
    filteredProducts() {
      const filtered = this.producten.filter((product) => product.categorie.naam === this.selectedCategory);
      console.log(filtered);
      return filtered;
    },
  },
  created() {
    this.selectedCategory = this.$route.params.categorie;
  },
};
</script>

<template>
  <div>
    <h2>{{ selectedCategory }}</h2>

    <ProductCardComponent v-for="product in filteredProducts" :key="product.id" :product="product" />
  </div>
</template>

<style scoped>

</style>
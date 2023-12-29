<script>
export default {
data() {
return {
winkelmandje: []
};
},
computed: {
  winkelmandjeItems() {
  this.winkelmandje= this.$pinia.state.productenStore.winkelmandje
    return this.winkelmandje
  },


  berekenTotaal() {
    return this.winkelmandje.reduce((total, item) => total + item.prijs * item.quantity, 0).toFixed(2);
  },
  berekenTotaalBtw(){}
},
  methods:{
    gaNaarCheckout() {
      this.$router.push('/checkout');
    },
    verwijderUitWinkelmandje(item) {
      this.$pinia.productenStore.winkelmandje.removeItem(item);
    },
  }



};
</script>

<template>
  <div class="winkelmandje">
    <h2>Winkelmandje</h2>

    <div v-if="winkelmandje.length > 0">
      <div v-for="item in winkelmandje" :key="item.id" class="winkelmandje-item">
        <img :src="item.afbeelding" :alt="item.titel" class="winkelmandje-item-image" />
        <div class="winkelmandje-item-info">
          <h3>{{ item.titel }}</h3>
          <p>{{ item.omschrijving }}</p>
          <p>Aantal: <input type="number" v-model="item.aantal" min="1" @input="updateAantal(item)" /></p>
          <button @click="verwijderUitWinkelmandje(item.id)">Verwijderen</button>
        </div>
      </div>

      <div class="winkelmandje-totals">
        <p>Totaal: {{ berekenTotaal() }} €</p>
        <p>Totaal incl. BTW: {{ berekenTotaalInclBtw() }} €</p>
      </div>
      <button @click="gaNaarCheckout">Bevestig artikelen</button>
    </div>
    <p v-else>Geen artikelen in het winkelmandje.</p>
  </div>
</template>




<style scoped lang="scss">
.winkelmandje {
  max-width: 800px;
  margin: 0 auto;

  .winkelmandje-item {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 10px;

    .winkelmandje-item-image {
      width: 80px;
      height: 80px;
      object-fit: cover;
      margin-right: 10px;
    }

    .winkelmandje-item-info {
      flex-grow: 1;
    }
  }

  .winkelmandje-totals {
    margin-top: 20px;
    font-weight: bold;
  }

  button {
    cursor: pointer;
    background-color: #FF3157C4;
    color: #FCF9F9FF;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;

    &:hover {
      background-color:#FFA730FF;
    }
  }
}
</style>
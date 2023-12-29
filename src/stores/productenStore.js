import {defineStore} from "pinia";

export const useProductStore = defineStore('productenStore', {
    state: () => ({

        winkelmandje: [],
    }),
    actions: {

        addToCart(item) {
            const existingProduct= this.winkelmandje.find((i) => i.id === item.id);
            if(existingProduct){
                existingProduct.quantity ++;
            }else{
                this.winkelmandje.push({...item, quantity:1});
            }

        },

    }
})
import { defineStore } from "pinia";

export const useCardStore = defineStore({
  id: 'card',
  state: () => ({
    cards: [],
    card: null,
    loading: false,
    error: null
  }),
  getters: {
    getCardForPassCode: (state) => {
      return (passCode) => state.cards.filter((card) => card.passCode.toLowerCase() ===  passCode.toLowerCase())
    }
  },
  actions: {
    async fetchCards() {
      this.cards = []
      this.loading = true
      try {
        
        this.cards = await fetch('https://madamadam.cyclic.app/cards').then((response) => response.json())

      } catch (error) {

        this.error = error

      } finally {

        this.loading = false

      }
    },
    async fetchCard(id) {
      this.card = null
      this.loading = true
      try{

        this.card = await fetch(`https://madamadam.cyclic.app/cards/${id}`).then((response) => response.json())

      } catch (error) {

        this.error = error

      } finally {

        this.loading = false

      }
    }
  }
})
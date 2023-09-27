import { defineStore } from "pinia"
import { useCardStore } from "./card"

export const useZhoneStore = defineStore({
  id: 'zhone',
  state: () => ({
    zhones: []
  }),
  getters: {
    getCardZhones: (state) => {
      const cardStore = useCardStore()
      return state.zhones.filter((zhone) => zhone.passCode.toLowerCase() === cardStore.card.passCode.toLowerCase())
    }
  },
  actions: {
    async fetchZhones() {
      this.comments = await fetch('https://madamadam.cyclic.app/zhones').then((response) => response.json())
    }
  }
})

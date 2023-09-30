import { defineStore } from 'pinia'
import { useZhoneStore } from './zhone'

export const useSiteStore = defineStore({
  id: 'site',
  state: () => ({
    sites: []
  }),
  getters: {
    // NB: pluralizing the adaptation
    // THIS NEEDS TO BE TESTED
    // COWBOY CODED
    getCardSites: (state) => {
      const zhoneStore = useZhoneStore()
      let cardSites = []
      for(const site of state.sites){
        for(const zhone of zhoneStore.zhones){
          if(site.zhoneCode.toLowerCase() === 
             zhone.zhoneCode.toLowerCase()){

            cardSites.push(site)
          }
        }
      }
      return cardSites
    }
  },
  actions: {
    async fetchSites(){
      this.sites = await fetch('https://madamadam.cyclic.app/sites').then((response) => response.json())
    }
  }
})
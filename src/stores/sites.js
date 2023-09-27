import { defineStore } from 'pinia'
import { useCardStore } from './card'
import { useZhoneStore } from './zhone'

export const useSiteStore = defineStore({
  id: 'site',
  state: () => ({
    sites: []
  }),
  getters: {
    // NB: pluralizing the adaptation
    getCardSites: (state) => {
      const cardStore = useCardStore()
      const zhoneStore = useZhoneStore()
      //TODO: NEED AN ERD TO VISUALIZE THIS BETTER, GONNA MAKE ONE IN CANVA QUICK
    }
  },
  actions: {
    async fetchSites(){
      //TODO: implement
    }

    // TODO: ADAPT "comments" from tutorial to "zhones"
    // need to call madamadam
    // adapt other one when done,
    // Sites, see https://madamadam.cyclic.app/ for data model
    // NB: once Sites is done (from Author), need to implement adaptation of getPostsPerAuthor in Post Store to become getCardsPerSite in Card Store but I think we will have to update data model to include "sites" in Card (verify if already there, otherwise add) may need to use Zhone as junction table because ours is a many to many relationship whereas tutorial is one to many relationship, ie. may need to adapt more hardcore so just noting it here SAVE THESE NOTES AND MOVE THEM TO NEXT FILE WHEN WE GET THERE
  }
})
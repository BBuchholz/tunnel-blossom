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
    //get by topic will go here
  },
  actions: {
    // TODO: finish adapting from POSTS
    // need to call madamadam
    // skip other two when done,
    // go straight to adapting PostView 
    // to be CardView
  }
})
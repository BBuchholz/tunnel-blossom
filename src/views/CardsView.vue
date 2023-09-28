<script setup>
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useCardStore } from '../stores/card'

  const { cards, loading, error } = storeToRefs(useCardStore())
  const { fetchCards } = useCardStore()

  fetchCards()
</script>

<template>
  <main>
    <p v-if="loading">Loading cards...</p>
    <p v-if="error">{{ error.message }}</p>
    <div v-if="cards">
      <div
        v-for="card in cards"
        :key="card.id"
        class="display"
      >
        <RouterLink
          :to="`/card/${card.id}`"
        >
          {{ card.passCode }}
        </RouterLink>
        <div>
          <img class="card" :src="card.image"> 
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

  .display {
    margin: 40px;
    text-align: center;
  }

  .card {
    max-width: 50%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    border: 5px;
    border-color: white;
    border-style: solid;
    border-radius: 1%;
  }
</style>

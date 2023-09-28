<script setup>
  import { useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useZhoneStore } from '../stores/zhone'
  import { useCardStore } from '../stores/card'
  import CardHolder from '../components/CardHolder.vue'

  const route = useRoute()
  const { getCardZhones } = storeToRefs(useZhoneStore())
  const { fetchZhones } = useZhoneStore()
  const { card, loading, error } = storeToRefs(useCardStore())
  const { fetchCard } = useCardStore()

  fetchZhones()
  fetchCard(route.params.id)
</script>

<template>
  <div>
    <p v-if="loading">Loading card...</p>
    <p v-if="error">{{ error.message }}</p>
    <p v-if="card">
      <CardHolder :card="card" :zhones="getCardZhones"></CardHolder>
    </p>
  </div> 
</template>
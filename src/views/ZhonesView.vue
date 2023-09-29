<script setup>
  // import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useZhoneStore } from '../stores/zhone'

  const { zhones, loading, error } = storeToRefs(useZhoneStore())
  const { fetchZhones } = useZhoneStore()

  fetchZhones()
  console.log('loaded')
  console.log(JSON.stringify(zhones))
</script>

<template>
  <main>
    <p v-if="loading">Loading zhones...</p>
    <p v-if="error">{{ error.message }}</p>
    <div v-if="zhones">
      <div
        v-for="zhone in zhones"
        :key="zhone.id"
        class="display"
      >
        ZHONE HERE -> {{ zhone }}
      </div>
    </div>
  </main>
</template>

<style scoped>

  .display {
    margin: 40px;
    text-align: center;
  }
</style>

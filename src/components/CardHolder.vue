<script setup>
  import { useZhoneStore } from '../stores/zhone';
  
  import ZhonesHolder from '../components/ZhonesHolder.vue'

  defineProps(['card', 'zhones'])

  const { fetchZhones } = useZhoneStore()

  fetchZhones()
</script>

<template>
  <div v-if="card">
    <p class="display">{{ card.passCode }}</p>
    <img class="card" :src="card.image"> 
    <div v-if="zhones">
      <ZhonesHolder :zhones="zhones"></ZhonesHolder>
    </div>
  </div>
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
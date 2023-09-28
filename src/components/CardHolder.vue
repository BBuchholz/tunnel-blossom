<script setup>
  // import { RouterLink } from 'vue-router'
  // import { storeToRefs } from 'pinia'
  import { useZhoneStore } from '../stores/zhone';
  
  //TODO: implement
  // import Zhone from '../components/ZhoneHolder.vue'

  defineProps(['card', 'zhones'])

  // const { getCardZhones } = storeToRefs(useZhoneStore())
  const { fetchZhones } = useZhoneStore()

  fetchZhones()
</script>

<template>
  <!-- <RouterLink
    :to="`/card/${card.id}`"
  >
    {{ card.passCode }}
  </RouterLink> -->
  <div v-if="card">
    <img class="card" :src="card.image"> 
    <p class="display">{{ card.passCode }}</p>
    <!-- <div v-if="zhones">
      <p class="display">ZHONES:</p>
      <div
        v-for="zhone in getCardZhones"
        :key="zhone.id"
        class="display"
      >
        Zhone: {{ zhone }}
      </div>  
    </div> -->
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
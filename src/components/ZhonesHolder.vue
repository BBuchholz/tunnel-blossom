<script setup>
  defineProps(['zhones'])
</script>

<template>
  <div>
    <h1>Zhones</h1>
    <div 
      v-for="zhone in zhones"
      :key="zhone.id"
    >
      <h3>{{ zhone.zhoneCode }}</h3>
      <p>({{ zhone.zhoneType }})</p>
    </div>
  </div>
</template>
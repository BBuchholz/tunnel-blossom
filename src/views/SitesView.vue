<script setup>
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useSiteStore } from '../stores/site'

  const { sites } = storeToRefs(useSiteStore())
  const { fetchSites } = useSiteStore()

  fetchSites()
</script>

<template>
  <div v-if="sites" >
    <p 
      v-for="site in sites"
      :key="site.id"
    >
      <RouterLink 
        :to="`/site/${site.zhoneCode}`"
      >
        {{ site.siteName }}
      </RouterLink>
    </p>
  </div>
</template>


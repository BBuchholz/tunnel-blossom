<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useSiteStore } from '../stores/site'
  // import { useCardStore } from '../stores/card'
  import SiteHolder from '../components/SiteHolder.vue'

  const route = useRoute()
  const { sites } = storeToRefs(useSiteStore())

  const getSiteByZhoneCode = computed(() => {
    return sites.value.find((site) => site.zhoneCode === route.params.zhonecode)
  })
</script>

<template>
  <div>
    <SiteHolder :site="getSiteByZhoneCode"></SiteHolder>
  </div>
</template>
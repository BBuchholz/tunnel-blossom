<script setup>

defineProps(['site'])
</script>

<template>
  <div>
    <h1>{{ site.siteName }}</h1>
    <p>{{ site.siteDesc }}</p>
    <a
      target="_blank"
      :href="site.siteUrl"
    >
      {{ site.siteUrl }}
    </a>
  </div>
</template>
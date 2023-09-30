<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   <header class="navbar">
    <div>
      <nav>
        <RouterLink to="/">Cards</RouterLink> -  
        <RouterLink to="/zhones">Zhones</RouterLink> -
        <RouterLink to="/sites">Sites</RouterLink> -
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> 

  <RouterView />
</template>

<style>
  .navbar {
    background-color: lightgreen;
    padding: 1.2rem;
  }
</style>
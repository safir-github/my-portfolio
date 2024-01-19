<script setup>

// Importez le composant Header
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { RouterView } from 'vue-router';

</script>

<template>

  <div class="div-main">

    <Header />
    

    <RouterView />

    <Footer />

    
  </div>

</template>

<style scoped>

.div-main {
  background-color: black;
}

</style>

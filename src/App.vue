<template>
  <div id="app" class="flex flex-col min-h-screen">
    <AppHeader />

    <main class="flex-grow container mx-auto px-4 py-8">
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  background-color: #f9fafb;
  color: #1f2937;
}
</style>

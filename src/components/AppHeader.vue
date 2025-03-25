<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-6 flex justify-between">
      <div class="text-xl font-semibold text-gray-800">
        {{ $t('header.welcome') }}
      </div>

      <div class="flex items-center">
        <nav class="space-x-6">
          <router-link to="/about" class="w-50 text-gray-700 hover:text-blue-600">{{ $t('header.about') }}</router-link>
          <router-link to="/portfolio" class="w-50 text-gray-700 hover:text-blue-600">{{ $t('header.portfolio') }}</router-link>
        </nav>
        <button
          @click="changeLanguage"
          class="w-20 hover:text-blue-600 focus:outline-none"
        >
          {{ currentLanguage === 'ru' ? 'RU' : 'EN' }}
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  computed: {
    currentLanguage() {
      return this.$i18n.locale;
    },
  },
  methods: {
    changeLanguage() {
      const newLocale = this.$i18n.locale === 'ru' ? 'en' : 'ru';
      this.$i18n.locale = newLocale;
    },
  },
};
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>

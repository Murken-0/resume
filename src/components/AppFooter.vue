<template>
  <footer class="bg-white shadow-lg mt-8">
    <div class="container mx-auto px-4 py-6 flex flex-col items-center space-y-4">
      <div class="text-center">
        <p class="text-gray-700">{{ $t('footer.contactMe') }}</p>
        <div class="mt-2 flex space-x-4">
          <a
            href="mailto:muravievvlad.2002@gmail.com"
            class="text-blue-600 hover:text-blue-800"
          >
            {{ $t('footer.email') }}
          </a>
          <a
            href="https://t.me/muraviev_v"
            target="_blank"
            class="text-blue-600 hover:text-blue-800"
          >
            {{ $t('footer.telegram') }}
          </a>
          <a
            href="https://github.com/Murken-0"
            target="_blank"
            class="text-blue-600 hover:text-blue-800"
          >
            {{ $t('footer.github') }}
          </a>
        </div>
      </div>

      <p class="text-sm text-gray-500">
        &copy; {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
footer {
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>

<template>
  <section class="container mx-auto px-4 py-6">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">{{ $t('about.title') }}</h1>

    <div class="grid md:grid-cols-3 gap-8">
      <div class="md:col-span-2">
        <p class="text-gray-700 mb-6 leading-relaxed">
          {{ $t('about.description') }}
        </p>
      </div>

      <div class="flex justify-center">
        <div class="w-64 h-64 bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
          <div class="w-full h-full flex items-center justify-center">
            <FaceIcon/>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-8">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">{{ $t('about.techTitle') }}</h2>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="(skill, index) in skills"
          :key="index"
          class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-m"
        >
          {{ skill }}
        </span>
      </div>
    </div>

    <div class="mt-6">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">{{ $t('about.personalTitle') }}</h2>
      <ul class="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-4">
        <li v-for="(trait, index) in traits" :key="index" class="flex items-start">
          <svg
            class="h-5 w-5 text-blue-500 mr-2 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span class="text-gray-700">{{ trait }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import FaceIcon from '@/components/icons/FaceIcon.vue'

export default {
  name: 'AboutPage',
  components: { FaceIcon },
  computed: {
    skills() {
      return this.$tm('about.skills')
    },
    traits() {
      return this.$tm('about.traits')
    },
  },
}
</script>

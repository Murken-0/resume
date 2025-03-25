<script setup>
import GitHubIcon from '@/components/icons/GitHubIcon.vue'
</script>

<template>
  <div
    class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
  >
    <div class="p-6 flex flex-col justify-between gap-4 h-full">
      <div>
        <h2 class="text-2xl font-bold text-gray-800 mb-3 flex items-center">
          <svg
            class="w-6 h-6 mr-2 text-purple-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          {{ $t('portfolio.projects.university.title') }}
        </h2>

        <p class="text-gray-600 mb-4">
          {{ $t('portfolio.projects.university.description') }}
        </p>

        <div class="space-y-3">
          <div
            v-for="(detail, index) in $tm('portfolio.projects.university.details')"
            :key="index"
            class="flex"
          >
            <svg
              class="flex-shrink-0 h-5 w-5 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-gray-700">{{ detail }}</span>
          </div>
        </div>
      </div>

      <div class="p-4 bg-gray-100 rounded-lg">
        <h3 class="font-semibold text-gray-800 mb-3">{{ $t('portfolio.techStack') }}</h3>
        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tech in $tm('portfolio.projects.university.technologies')"
            :key="tech"
            class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center"
          >
            {{ tech }}
          </span>
        </div>
        <div class="flex space-x-4">
          <a
            :href="$t('portfolio.projects.university.github')"
            target="_blank"
            class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <GitHubIcon class="mr-2" />
            {{ $t('portfolio.viewOnGitHub') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

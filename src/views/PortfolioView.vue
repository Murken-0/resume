<template>
  <section class="container mx-auto px-4 py-6">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">{{ $t('portfolio.title') }}</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <WinAutoPlatformProject/>
      <UniversityAnalyticsProject/>
    </div>
  </section>
</template>

<script>
import UniversityAnalyticsProject from '@/components/projects/UniversityAnalyticsProject.vue'
import WinAutoPlatformProject from '@/components/projects/WinAutoPlatformProject.vue'

export default {
  components: { WinAutoPlatformProject, UniversityAnalyticsProject}
};
</script>

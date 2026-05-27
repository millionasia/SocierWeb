<script setup>
import { Analytics } from '@vercel/analytics/nuxt/runtime'
</script>

<template>
  <div class="min-h-screen bg-mist text-ink">
    <Analytics />
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

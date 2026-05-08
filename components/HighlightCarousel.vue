<script setup>
defineProps({
  photos: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="overflow-hidden bg-ivory py-11 sm:py-12">
    <div class="section-shell mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="eyebrow">Gallery</p>
        <h2 class="mt-2 text-2xl font-bold sm:text-3xl">精選花絮</h2>
      </div>
      <NuxtLink
        to="/gallery"
        class="inline-flex items-center gap-2 text-sm font-bold text-teal transition hover:text-rosewood"
      >
        花絮留影
        <Icon name="lucide:images" class="h-4 w-4" />
      </NuxtLink>
    </div>

    <div class="relative">
      <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ivory to-transparent" />
      <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ivory to-transparent" />
      <div class="highlight-track flex w-max gap-4 px-4">
        <figure
          v-for="(photo, index) in [...photos, ...photos]"
          :key="`${photo.id}-${index}`"
          class="w-72 shrink-0 overflow-hidden rounded bg-white shadow-sm ring-1 ring-rosewood/10 sm:w-80"
        >
          <img :src="photo.url" :alt="photo.title" class="h-48 w-full object-cover sm:h-52">
          <figcaption class="flex items-center justify-between gap-3 p-3">
            <span class="text-sm font-bold">{{ photo.title }}</span>
            <Icon name="lucide:camera" class="h-4 w-4 text-brass" />
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

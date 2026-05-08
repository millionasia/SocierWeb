<script setup>
const route = useRoute()
const { $millionasia } = useNuxtApp()

const perPage = 8
const selectedPhoto = ref(null)
const pageCount = computed(() => Math.ceil($millionasia.allPhotos.length / perPage))
const currentPage = computed(() => {
  const page = Number(route.query.page || 1)
  return Math.min(Math.max(Number.isFinite(page) ? page : 1, 1), pageCount.value)
})
const pagedPhotos = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return $millionasia.allPhotos.slice(start, start + perPage)
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Gallery"
      title="花絮留影"
      description="活動現場、會員交流與協會共創時刻。"
      icon="lucide:images"
    />

    <section class="section-shell py-10">
      <div class="mb-5 flex items-center justify-between gap-4">
        <p class="text-sm font-bold text-ink/58">共 {{ $millionasia.allPhotos.length }} 張，每頁 {{ perPage }} 張</p>
        <p class="text-sm font-bold text-brass">第 {{ currentPage }} / {{ pageCount }} 頁</p>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <button
          v-for="photo in pagedPhotos"
          :key="photo.id"
          type="button"
          class="overflow-hidden rounded bg-ivory text-left shadow-sm ring-1 ring-rosewood/10 transition hover:-translate-y-1 hover:shadow-soft"
          @click="selectedPhoto = photo"
        >
          <img :src="photo.url" :alt="photo.title" class="h-56 w-full object-cover">
          <span class="block p-4">
            <span class="flex items-center justify-between gap-3">
              <span class="font-bold">{{ photo.title }}</span>
              <Icon name="lucide:maximize-2" class="h-4 w-4 text-brass" />
            </span>
            <span class="mt-2 line-clamp-2 block text-sm leading-6 text-ink/64">
              {{ photo.description }}
            </span>
          </span>
        </button>
      </div>

      <nav class="mt-8 flex flex-wrap items-center justify-center gap-2" aria-label="花絮留影分頁">
        <NuxtLink
          v-for="page in pageCount"
          :key="page"
          :to="{ path: '/gallery', query: page === 1 ? {} : { page } }"
          class="flex h-10 min-w-10 items-center justify-center rounded px-3 text-sm font-black transition"
          :class="page === currentPage ? 'bg-rosewood text-white' : 'bg-ivory text-ink ring-1 ring-rosewood/10 hover:bg-brass hover:text-white'"
        >
          {{ page }}
        </NuxtLink>
      </nav>
    </section>

    <Teleport to="body">
      <div
        v-if="selectedPhoto"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/78 p-4"
        role="dialog"
        aria-modal="true"
        @click.self="selectedPhoto = null"
      >
        <figure class="max-h-[92vh] w-full max-w-5xl overflow-hidden rounded bg-ivory shadow-soft">
          <img :src="selectedPhoto.url" :alt="selectedPhoto.title" class="max-h-[72vh] w-full object-contain bg-black">
          <figcaption class="flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:justify-between">
            <span>
              <span class="block text-xl font-black">{{ selectedPhoto.title }}</span>
              <span class="mt-2 block leading-7 text-ink/68">{{ selectedPhoto.description }}</span>
            </span>
            <button
              type="button"
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-rosewood text-white transition hover:bg-teal"
              aria-label="關閉放大照片"
              @click="selectedPhoto = null"
            >
              <Icon name="lucide:x" class="h-5 w-5" />
            </button>
          </figcaption>
        </figure>
      </div>
    </Teleport>
  </div>
</template>

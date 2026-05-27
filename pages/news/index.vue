<script setup>
const route = useRoute()
const { $millionasia } = useNuxtApp()

const perPage = 6
const pageCount = computed(() => Math.ceil($millionasia.news.length / perPage))
const currentPage = computed(() => {
  const page = Number(route.query.page || 1)
  return Math.min(Math.max(Number.isFinite(page) ? page : 1, 1), pageCount.value)
})
const pagedNews = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return $millionasia.news.slice(start, start + perPage)
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="News"
      title="最新消息"
      description="協會公告、專案進度與會員服務資訊。"
      icon="lucide:newspaper"
    />

    <section class="section-shell py-10">
      <div class="mb-5 flex items-center justify-between gap-4">
        <p class="text-sm font-bold text-ink/58">共 {{ $millionasia.news.length }} 筆，每頁 {{ perPage }} 筆</p>
        <p class="text-sm font-bold text-brass">第 {{ currentPage }} / {{ pageCount }} 頁</p>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="item in pagedNews"
          :id="`item-${item.id}`"
          :key="item.id"
          :to="`/news/${item.id}`"
          class="group overflow-hidden rounded bg-ivory shadow-sm ring-1 ring-rosewood/10 transition hover:-translate-y-1 hover:shadow-soft"
        >
          <img :src="item.image" :alt="item.title" class="h-52 w-full object-cover">
          <div class="p-5">
            <div class="mb-4 flex items-center justify-between gap-4">
              <time class="text-sm font-bold text-brass">{{ item.date }}</time>
              <Icon name="lucide:arrow-up-right" class="h-5 w-5 text-teal transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <h2 class="text-xl font-bold leading-relaxed group-hover:text-teal">{{ item.title }}</h2>
            <p class="mt-3 text-sm leading-7 text-ink/68">{{ item.summary }}</p>
          </div>
        </NuxtLink>
      </div>

      <nav class="mt-8 flex flex-wrap items-center justify-center gap-2" aria-label="最新消息分頁">
        <NuxtLink
          v-for="page in pageCount"
          :key="page"
          :to="{ path: '/news', query: page === 1 ? {} : { page } }"
          class="flex h-10 min-w-10 items-center justify-center rounded px-3 text-sm font-black transition"
          :class="page === currentPage ? 'bg-rosewood text-white' : 'bg-ivory text-ink ring-1 ring-rosewood/10 hover:bg-brass hover:text-white'"
        >
          {{ page }}
        </NuxtLink>
      </nav>
    </section>
  </div>
</template>

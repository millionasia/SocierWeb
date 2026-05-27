<script setup>
const route = useRoute()
const { $millionasia } = useNuxtApp()

const perPage = 6
const pageCount = computed(() => Math.ceil($millionasia.events.length / perPage))
const currentPage = computed(() => {
  const page = Number(route.query.page || 1)
  return Math.min(Math.max(Number.isFinite(page) ? page : 1, 1), pageCount.value)
})
const pagedEvents = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return $millionasia.events.slice(start, start + perPage)
})

const registrationStatus = (event) => $millionasia.getEventRegistrationStatus(event)
</script>

<template>
  <div>
    <PageHero
      eyebrow="Events"
      title="活動公告"
      description="講座、會員交流與協會重要會議時程。"
      icon="lucide:calendar-check"
    />

    <section class="section-shell py-10">
      <div class="mb-5 flex items-center justify-between gap-4">
        <p class="text-sm font-bold text-ink/58">共 {{ $millionasia.events.length }} 筆，每頁 {{ perPage }} 筆</p>
        <p class="text-sm font-bold text-brass">第 {{ currentPage }} / {{ pageCount }} 頁</p>
      </div>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="item in pagedEvents"
          :id="`item-${item.id}`"
          :key="item.id"
          :to="`/events/${item.id}`"
          class="group overflow-hidden rounded bg-ivory shadow-sm ring-1 ring-rosewood/10 transition hover:-translate-y-1 hover:shadow-soft"
        >
          <div class="relative">
            <img :src="item.image" :alt="item.title" class="h-56 w-full object-cover">
            <time class="absolute left-4 top-4 rounded bg-rosewood px-3 py-2 text-sm font-bold text-white shadow">
              {{ item.date }}
            </time>
            <span
              class="absolute bottom-4 right-4 rounded px-3 py-2 text-xs font-black shadow"
              :class="registrationStatus(item).isFull ? 'bg-ink text-white' : 'bg-brass text-white'"
            >
              {{ registrationStatus(item).label }}
            </span>
          </div>
          <div class="p-5">
            <div class="mb-4 flex items-center justify-between gap-4">
              <span class="text-sm font-bold text-brass">活動公告</span>
              <Icon name="lucide:arrow-up-right" class="h-5 w-5 text-rosewood transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <h2 class="flex flex-wrap items-center gap-2 text-xl font-bold leading-relaxed group-hover:text-teal">
              <span>{{ item.title }}</span>
              <span
                v-if="!registrationStatus(item).isFull"
                class="inline-flex items-center gap-1 rounded bg-teal/10 px-2.5 py-1 text-xs font-black leading-none text-teal ring-1 ring-teal/20"
              >
                <Icon name="lucide:mouse-pointer-click" class="h-3.5 w-3.5" />
                線上報名
              </span>
            </h2>
            <p class="mt-3 text-sm leading-7 text-ink/68">{{ item.summary }}</p>
            <div class="mt-5 flex items-center justify-between gap-3 border-t border-rosewood/10 pt-4">
              <span class="inline-flex items-center gap-2 text-sm font-bold text-ink/62">
                <Icon name="lucide:users" class="h-4 w-4 text-teal" />
                剩餘 {{ registrationStatus(item).remaining }} / {{ item.capacity }} 名
              </span>
              <span class="inline-flex items-center gap-1 text-sm font-black text-rosewood">
                查看報名
                <Icon name="lucide:chevron-right" class="h-4 w-4" />
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <nav class="mt-8 flex flex-wrap items-center justify-center gap-2" aria-label="活動公告分頁">
        <NuxtLink
          v-for="page in pageCount"
          :key="page"
          :to="{ path: '/events', query: page === 1 ? {} : { page } }"
          class="flex h-10 min-w-10 items-center justify-center rounded px-3 text-sm font-black transition"
          :class="page === currentPage ? 'bg-rosewood text-white' : 'bg-ivory text-ink ring-1 ring-rosewood/10 hover:bg-brass hover:text-white'"
        >
          {{ page }}
        </NuxtLink>
      </nav>
    </section>
  </div>
</template>

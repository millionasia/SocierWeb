<script setup>
const { $millionasia } = useNuxtApp()
const highlights = useState('home-highlights', () => $millionasia.getRandomHighlights())
const spotlightPhotos = computed(() => highlights.value.slice(0, 4))
const homeNews = computed(() => $millionasia.news.slice(0, 10))
const homeEvents = computed(() => $millionasia.events.slice(0, 10))
const eventRegistrationStatus = (event) => $millionasia.getEventRegistrationStatus(event)
const statusBadgeClass = (event) => {
  const status = eventRegistrationStatus(event)
  if (status.isOpen) return 'bg-teal text-white'
  if (status.isFull) return 'bg-rosewood text-white'
  if (status.isClosed) return 'bg-ink text-white'
  return 'bg-white text-ink ring-1 ring-rosewood/15'
}
</script>

<template>
  <div class="overflow-hidden">
    <section class="relative bg-rosewood text-white">
      <div class="absolute inset-0">
        <img
          :src="$millionasia.heroImage.url"
          :alt="$millionasia.heroImage.title"
          class="h-full w-full object-cover"
        >
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(192,145,61,0.34),transparent_28%),linear-gradient(105deg,rgba(48,10,13,0.95),rgba(100,23,27,0.72)_48%,rgba(100,23,27,0.22))]" />
      </div>

      <div class="section-shell relative grid min-h-[560px] gap-8 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div class="max-w-5xl">
          <p class="inline-flex items-center gap-2 rounded-full border border-brass/50 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brass backdrop-blur">
            <Icon name="lucide:sparkles" class="h-4 w-4" />
            {{ $millionasia.englishName }}
          </p>
          <h1 class="mt-5 max-w-[1120px] text-4xl font-black leading-tight sm:text-5xl lg:whitespace-nowrap lg:text-6xl xl:text-7xl">
            社團法人臺北市三創協會
          </h1>
          <p class="mt-5 max-w-2xl text-base leading-8 text-white/84 sm:text-lg">
            把產業交流、創新議題與會員連結放在同一個現場，讓協會網站像一個正在發生的城市共創入口。
          </p>

          <div class="mt-7 grid max-w-xl grid-cols-3 gap-2 rounded bg-white/10 p-2 backdrop-blur">
            <div class="rounded bg-white/10 px-3 py-3">
              <p class="text-2xl font-black text-brass">{{ $millionasia.news.length }}</p>
              <p class="text-xs font-semibold text-white/75">最新消息</p>
            </div>
            <div class="rounded bg-white/10 px-3 py-3">
              <p class="text-2xl font-black text-brass">{{ $millionasia.events.length }}</p>
              <p class="text-xs font-semibold text-white/75">活動公告</p>
            </div>
            <div class="rounded bg-white/10 px-3 py-3">
              <p class="text-2xl font-black text-brass">{{ $millionasia.allPhotos.length }}</p>
              <p class="text-xs font-semibold text-white/75">精選花絮</p>
            </div>
          </div>
        </div>

        <div class="relative hidden min-h-[430px] lg:block">
          <div class="spotlight-card spotlight-card-a absolute left-0 top-8 w-64 rotate-[-6deg] overflow-hidden rounded bg-ivory shadow-soft ring-1 ring-white/40">
            <img :src="spotlightPhotos[0]?.url" :alt="spotlightPhotos[0]?.title" class="h-44 w-full object-cover">
            <p class="px-4 py-3 text-sm font-bold text-rosewood">{{ spotlightPhotos[0]?.title }}</p>
          </div>
          <div class="spotlight-card spotlight-card-b absolute right-0 top-0 w-72 rotate-[4deg] overflow-hidden rounded bg-ivory shadow-soft ring-1 ring-white/40">
            <img :src="spotlightPhotos[1]?.url" :alt="spotlightPhotos[1]?.title" class="h-52 w-full object-cover">
            <p class="px-4 py-3 text-sm font-bold text-rosewood">{{ spotlightPhotos[1]?.title }}</p>
          </div>
          <div class="spotlight-card spotlight-card-c absolute bottom-2 left-16 w-80 rotate-[2deg] overflow-hidden rounded bg-ivory shadow-soft ring-1 ring-white/40">
            <img :src="spotlightPhotos[2]?.url" :alt="spotlightPhotos[2]?.title" class="h-48 w-full object-cover">
            <p class="px-4 py-3 text-sm font-bold text-rosewood">{{ spotlightPhotos[2]?.title }}</p>
          </div>
          <div class="spotlight-badge absolute bottom-14 right-10 flex h-24 w-24 rotate-[-8deg] items-center justify-center rounded bg-brass text-center text-sm font-black leading-5 text-white shadow-soft">
            活動<br>現場
          </div>
        </div>
      </div>
    </section>

    <section class="relative bg-mist py-10">
      <div class="absolute inset-x-0 top-0 h-24 bg-rosewood" />
      <div class="section-shell relative">
        <div class="grid overflow-hidden rounded bg-ivory shadow-soft ring-1 ring-rosewood/10 lg:grid-cols-[1fr_1fr]">
          <div class="border-b border-rosewood/10 p-5 lg:border-b-0 lg:border-r lg:p-6">
            <div class="mb-5 flex items-center justify-between">
              <div>
                <p class="eyebrow">News</p>
                <h2 class="mt-1 text-2xl font-black">最新消息</h2>
              </div>
              <NuxtLink to="/news" class="flex h-10 w-10 items-center justify-center rounded bg-teal text-white transition hover:bg-rosewood" aria-label="查看最新消息">
                <Icon name="lucide:arrow-up-right" class="h-5 w-5" />
              </NuxtLink>
            </div>

            <div class="space-y-3">
              <NuxtLink
                v-for="item in homeNews"
                :key="item.id"
                :to="`/news/${item.id}`"
                class="group grid grid-cols-[5rem_1fr] gap-4 rounded bg-white p-3 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <img :src="item.image" :alt="item.title" class="h-20 w-full rounded object-cover ring-1 ring-rosewood/10">
                <span>
                  <span class="flex flex-wrap items-center gap-2">
                    <time class="text-sm font-bold text-brass">{{ item.date }}</time>
                    <span
                      v-if="eventRegistrationStatus(item).acceptsRegistration"
                      class="inline-flex items-center gap-1 rounded bg-teal px-2 py-1 text-xs font-black leading-none text-white"
                    >
                      <Icon name="lucide:mouse-pointer-click" class="h-3 w-3" />
                      立刻報名
                    </span>
                  </span>
                  <span class="mt-1 block font-bold leading-relaxed text-ink group-hover:text-teal">{{ item.title }}</span>
                  <span class="mt-1 line-clamp-1 block text-xs text-ink/58">{{ item.summary }}</span>
                </span>
              </NuxtLink>
            </div>
            <NuxtLink to="/news" class="mt-5 inline-flex items-center gap-2 text-sm font-black text-teal transition hover:text-rosewood">
              點選看更多
              <Icon name="lucide:arrow-right" class="h-4 w-4" />
            </NuxtLink>
          </div>

          <div class="bg-[linear-gradient(135deg,rgba(163,32,36,0.08),rgba(192,145,61,0.14))] p-5 lg:p-6">
            <div class="mb-5 flex items-center justify-between">
              <div>
                <p class="eyebrow">Events</p>
                <h2 class="mt-1 text-2xl font-black">活動公告</h2>
              </div>
              <NuxtLink to="/events" class="flex h-10 w-10 items-center justify-center rounded bg-brass text-white transition hover:bg-rosewood" aria-label="查看活動公告">
                <Icon name="lucide:calendar-days" class="h-5 w-5" />
              </NuxtLink>
            </div>

            <div class="space-y-3">
              <NuxtLink
                v-for="item in homeEvents"
                :key="item.id"
                :to="`/events/${item.id}`"
                class="group grid grid-cols-[5rem_1fr] gap-4 rounded bg-ivory/90 p-3 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <img :src="item.image" :alt="item.title" class="h-20 w-full rounded object-cover ring-1 ring-rosewood/10">
                <span>
                  <span class="flex flex-wrap items-center gap-2">
                    <time class="text-sm font-bold text-brass">{{ item.date }}</time>
                    <span
                      class="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-black leading-none"
                      :class="statusBadgeClass(item)"
                    >
                      <Icon
                        :name="eventRegistrationStatus(item).acceptsRegistration ? 'lucide:mouse-pointer-click' : 'lucide:info'"
                        class="h-3 w-3"
                      />
                      {{ eventRegistrationStatus(item).label }}
                    </span>
                  </span>
                  <span class="mt-1 block font-bold leading-relaxed text-ink group-hover:text-teal">{{ item.title }}</span>
                  <span class="mt-1 line-clamp-1 block text-xs text-ink/58">{{ item.summary }}</span>
                </span>
              </NuxtLink>
            </div>
            <NuxtLink to="/events" class="mt-5 inline-flex items-center gap-2 text-sm font-black text-teal transition hover:text-rosewood">
              點選看更多
              <Icon name="lucide:arrow-right" class="h-4 w-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <HighlightCarousel :photos="highlights" />
  </div>
</template>

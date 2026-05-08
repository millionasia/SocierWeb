<script setup>
const route = useRoute()
const { $millionasia } = useNuxtApp()

const item = computed(() => $millionasia.findEvent(route.params.id))
const adjacent = computed(() => $millionasia.getAdjacent($millionasia.events, route.params.id))

useHead(() => ({
  title: item.value ? `${item.value.title}｜活動公告` : '活動公告'
}))
</script>

<template>
  <div>
    <section v-if="item" class="bg-ivory">
      <div class="section-shell py-8">
        <NuxtLink to="/events" class="inline-flex items-center gap-2 text-sm font-bold text-teal transition hover:text-rosewood">
          <Icon name="lucide:arrow-left" class="h-4 w-4" />
          返回活動公告
        </NuxtLink>

        <article class="mt-6 overflow-hidden rounded bg-white shadow-soft ring-1 ring-rosewood/10">
          <div class="relative">
            <img :src="item.image" :alt="item.title" class="h-[280px] w-full object-cover sm:h-[420px]">
            <time class="absolute left-5 top-5 rounded bg-rosewood px-4 py-2 text-sm font-bold text-white shadow">
              {{ item.date }}
            </time>
          </div>

          <div class="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_20rem]">
            <div>
              <p class="eyebrow">Event Detail</p>
              <h1 class="mt-3 text-3xl font-black leading-tight sm:text-4xl">{{ item.title }}</h1>
              <p class="mt-5 text-lg leading-9 text-ink/72">{{ item.summary }}</p>

              <div class="mt-7 space-y-4 border-t border-rosewood/10 pt-6">
                <p v-for="paragraph in item.content" :key="paragraph" class="leading-8 text-ink/72">
                  {{ paragraph }}
                </p>
              </div>

              <div class="mt-7 rounded bg-mist p-5 ring-1 ring-rosewood/10">
                <h2 class="text-xl font-black">活動流程</h2>
                <ol class="mt-4 space-y-3">
                  <li v-for="(agenda, index) in item.agenda" :key="agenda" class="flex gap-3">
                    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-rosewood text-xs font-black text-white">
                      {{ index + 1 }}
                    </span>
                    <span class="leading-7 text-ink/72">{{ agenda }}</span>
                  </li>
                </ol>
              </div>
            </div>

            <aside class="rounded bg-rosewood p-5 text-white shadow-soft">
              <p class="text-xs font-bold uppercase tracking-[0.2em] text-brass">Event Info</p>
              <dl class="mt-5 space-y-5 text-sm">
                <div>
                  <dt class="font-bold text-white/58">活動日期</dt>
                  <dd class="mt-1 font-bold">{{ item.date }}</dd>
                </div>
                <div>
                  <dt class="font-bold text-white/58">活動時間</dt>
                  <dd class="mt-1 font-bold">{{ item.time }}</dd>
                </div>
                <div>
                  <dt class="font-bold text-white/58">活動地點</dt>
                  <dd class="mt-1 font-bold">{{ item.location }}</dd>
                </div>
                <div>
                  <dt class="font-bold text-white/58">參與對象</dt>
                  <dd class="mt-2 flex flex-wrap gap-2">
                    <span v-for="audience in item.audience" :key="audience" class="rounded bg-white/10 px-3 py-1 font-bold">
                      {{ audience }}
                    </span>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </article>

        <nav class="mt-6 grid gap-3 sm:grid-cols-2" aria-label="活動公告換頁">
          <NuxtLink
            v-if="adjacent.previous"
            :to="`/events/${adjacent.previous.id}`"
            class="rounded bg-white p-4 shadow-sm ring-1 ring-rosewood/10 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span class="flex items-center gap-2 text-sm font-bold text-brass">
              <Icon name="lucide:arrow-left" class="h-4 w-4" />
              上一則
            </span>
            <span class="mt-2 block font-bold">{{ adjacent.previous.title }}</span>
          </NuxtLink>
          <div v-else />

          <NuxtLink
            v-if="adjacent.next"
            :to="`/events/${adjacent.next.id}`"
            class="rounded bg-white p-4 text-right shadow-sm ring-1 ring-rosewood/10 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span class="flex items-center justify-end gap-2 text-sm font-bold text-brass">
              下一則
              <Icon name="lucide:arrow-right" class="h-4 w-4" />
            </span>
            <span class="mt-2 block font-bold">{{ adjacent.next.title }}</span>
          </NuxtLink>
        </nav>
      </div>
    </section>

    <section v-else class="section-shell py-14">
      <h1 class="text-3xl font-black">找不到這則活動公告</h1>
      <NuxtLink to="/events" class="mt-5 inline-flex items-center gap-2 font-bold text-teal">
        <Icon name="lucide:arrow-left" class="h-4 w-4" />
        返回活動公告
      </NuxtLink>
    </section>
  </div>
</template>

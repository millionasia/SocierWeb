<script setup>
const route = useRoute()
const { $millionasia } = useNuxtApp()

const item = computed(() => $millionasia.findNews(route.params.id))
const adjacent = computed(() => $millionasia.getAdjacent($millionasia.news, route.params.id))

useHead(() => ({
  title: item.value ? `${item.value.title}｜最新消息` : '最新消息'
}))
</script>

<template>
  <div>
    <section v-if="item" class="bg-ivory">
      <div class="section-shell py-8">
        <NuxtLink to="/news" class="inline-flex items-center gap-2 text-sm font-bold text-teal transition hover:text-rosewood">
          <Icon name="lucide:arrow-left" class="h-4 w-4" />
          返回最新消息
        </NuxtLink>

        <article class="mt-6 overflow-hidden rounded bg-white shadow-soft ring-1 ring-rosewood/10">
          <img :src="item.image" :alt="item.title" class="h-[280px] w-full object-cover sm:h-[420px]">
          <div class="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_18rem]">
            <div>
              <div class="mb-4 flex flex-wrap items-center gap-3">
                <time class="rounded bg-brass/10 px-3 py-2 text-sm font-bold text-brass">{{ item.date }}</time>
                <span class="rounded bg-rosewood/10 px-3 py-2 text-sm font-bold text-rosewood">{{ item.related }}</span>
              </div>
              <h1 class="text-3xl font-black leading-tight sm:text-4xl">{{ item.title }}</h1>
              <p class="mt-5 text-lg leading-9 text-ink/72">{{ item.summary }}</p>

              <div class="mt-7 space-y-4 border-t border-rosewood/10 pt-6">
                <p v-for="paragraph in item.content" :key="paragraph" class="leading-8 text-ink/72">
                  {{ paragraph }}
                </p>
              </div>
            </div>

            <aside class="rounded bg-mist p-5 ring-1 ring-rosewood/10">
              <p class="eyebrow">Article Info</p>
              <dl class="mt-4 space-y-4 text-sm">
                <div>
                  <dt class="font-bold text-ink/55">發布日期</dt>
                  <dd class="mt-1 font-bold text-ink">{{ item.date }}</dd>
                </div>
                <div>
                  <dt class="font-bold text-ink/55">內容分類</dt>
                  <dd class="mt-1 font-bold text-ink">{{ item.related }}</dd>
                </div>
                <div>
                  <dt class="font-bold text-ink/55">資料來源</dt>
                  <dd class="mt-1 font-bold text-ink">三創協會秘書處</dd>
                </div>
              </dl>
            </aside>
          </div>
        </article>

        <nav class="mt-6 grid gap-3 sm:grid-cols-2" aria-label="最新消息換頁">
          <NuxtLink
            v-if="adjacent.previous"
            :to="`/news/${adjacent.previous.id}`"
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
            :to="`/news/${adjacent.next.id}`"
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
      <h1 class="text-3xl font-black">找不到這則最新消息</h1>
      <NuxtLink to="/news" class="mt-5 inline-flex items-center gap-2 font-bold text-teal">
        <Icon name="lucide:arrow-left" class="h-4 w-4" />
        返回最新消息
      </NuxtLink>
    </section>
  </div>
</template>

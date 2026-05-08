<script setup>
const { $millionasia } = useNuxtApp()
</script>

<template>
  <div>
    <PageHero
      eyebrow="Leadership"
      title="協會理監事"
      description="本屆理監事名單。"
      icon="lucide:users-round"
    />

    <section class="section-shell py-10">
      <p class="mb-5 rounded bg-brass/10 px-4 py-3 text-sm font-bold text-ink/68 ring-1 ring-brass/20">
        以下人像為原型示意頭像，非實際理監事本人照片。
      </p>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="director in $millionasia.directors"
          :key="director.id"
          class="rounded bg-ivory p-4 shadow-sm ring-1 ring-rosewood/10 transition hover:-translate-y-1 hover:shadow-soft"
        >
          <div class="flex items-center gap-4">
            <img
              :src="director.avatar"
              :alt="`${director.name} 示意頭像`"
              class="h-16 w-16 shrink-0 rounded-full bg-rosewood object-cover ring-2 ring-brass/40"
            >
            <div>
              <p class="text-xs font-bold text-brass">{{ director.title }}</p>
              <h2 class="mt-1 text-lg font-black">{{ director.name }}</h2>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

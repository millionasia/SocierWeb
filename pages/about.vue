<script setup>
const { $millionasia } = useNuxtApp()
const intro = $millionasia.introduction
</script>

<template>
  <div>
    <PageHero
      eyebrow="About"
      title="協會介紹"
      :description="intro.summary"
      icon="lucide:landmark"
    />

    <section class="section-shell grid gap-8 py-10 lg:grid-cols-[1.2fr_0.8fr]">
      <article class="rounded bg-ivory p-6 shadow-sm ring-1 ring-rosewood/10 sm:p-8">
        <p class="eyebrow">Overview</p>
        <h2 class="mt-3 text-2xl font-bold leading-tight sm:text-3xl">{{ intro.title }}</h2>

        <div class="mt-5 space-y-4">
          <p
            v-for="paragraph in intro.paragraphs"
            :key="paragraph"
            class="text-base leading-8 text-ink/72"
          >
            {{ paragraph }}
          </p>
        </div>
      </article>

      <aside class="space-y-5">
        <div class="rounded bg-ivory p-5 shadow-sm ring-1 ring-rosewood/10">
          <p class="eyebrow">Focus</p>
          <div class="mt-4 grid gap-3">
            <div
              v-for="item in intro.highlights"
              :key="item"
              class="flex items-center gap-3 rounded bg-white p-4 shadow-sm ring-1 ring-rosewood/10"
            >
              <span class="flex h-10 w-10 items-center justify-center rounded bg-teal/10 text-teal">
                <Icon name="lucide:check" class="h-5 w-5" />
              </span>
              <span class="font-bold">{{ item }}</span>
            </div>
          </div>
        </div>

        <div class="rounded bg-rosewood p-5 text-white shadow-soft">
          <p class="text-xs font-bold uppercase tracking-[0.2em] text-brass">Principles</p>
          <ul class="mt-4 space-y-3">
            <li
              v-for="principle in intro.principles"
              :key="principle"
              class="flex gap-3 text-sm leading-7 text-white/84"
            >
              <Icon name="lucide:dot" class="mt-1 h-5 w-5 shrink-0 text-brass" />
              <span>{{ principle }}</span>
            </li>
          </ul>
        </div>
      </aside>
    </section>
  </div>
</template>

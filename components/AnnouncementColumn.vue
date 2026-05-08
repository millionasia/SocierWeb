<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  linkTo: {
    type: String,
    required: true
  },
  tone: {
    type: String,
    default: 'teal'
  }
})
</script>

<template>
  <section class="h-full border-t-4 bg-ivory p-5 shadow-soft" :class="tone === 'rosewood' ? 'border-rosewood' : 'border-teal'">
    <div class="mb-4 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <span
          class="flex h-10 w-10 items-center justify-center rounded text-white"
          :class="tone === 'rosewood' ? 'bg-rosewood' : 'bg-teal'"
        >
          <Icon :name="icon" class="h-5 w-5" />
        </span>
        <h2 class="text-xl font-bold">{{ title }}</h2>
      </div>
      <NuxtLink
        :to="linkTo"
        class="flex h-9 w-9 items-center justify-center rounded border border-rosewood/15 text-ink/65 transition hover:border-teal hover:text-teal"
        :aria-label="`查看${title}`"
      >
        <Icon name="lucide:arrow-up-right" class="h-5 w-5" />
      </NuxtLink>
    </div>

    <ul class="divide-y divide-rosewood/10">
      <li v-for="item in items" :key="item.id">
        <NuxtLink :to="`${linkTo}#item-${item.id}`" class="group grid grid-cols-[4.5rem_1fr] gap-3 rounded px-1 py-3 transition hover:bg-white">
          <img
            v-if="item.image"
            :src="item.image"
            :alt="item.title"
            class="h-16 w-full rounded object-cover ring-1 ring-rosewood/10"
          >
          <span v-else class="h-16 rounded bg-rosewood/10" />
          <span>
            <time class="text-sm font-semibold text-brass">{{ item.date }}</time>
            <span class="mt-1 block text-base font-semibold leading-relaxed text-ink transition group-hover:text-teal">
              {{ item.title }}
            </span>
          </span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

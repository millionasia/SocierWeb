<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: 'lucide:building-2'
  }
})
</script>

<template>
  <section class="bg-ivory">
    <div class="section-shell py-10 sm:py-12">
      <div class="max-w-3xl">
        <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
        <div class="mt-3 flex items-start gap-4">
          <span class="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded bg-teal text-white">
            <Icon :name="icon" class="h-5 w-5" />
          </span>
          <div>
            <h1 class="text-3xl font-bold leading-tight sm:text-4xl">{{ title }}</h1>
            <p v-if="description" class="mt-3 text-base leading-7 text-ink/70">{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

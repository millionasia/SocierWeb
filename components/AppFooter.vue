<script setup>
const { $millionasia } = useNuxtApp()
</script>

<template>
  <footer class="border-t border-brass/30 bg-rosewood text-white">
    <div class="section-shell grid gap-6 py-7 lg:grid-cols-[1.2fr_1.4fr_auto] lg:items-center">
      <div class="flex items-center gap-3">
        <img
          src="/sanchuang-logo.png"
          alt="社團法人臺北市三創協會 LOGO"
          class="h-11 w-auto max-w-[220px] rounded bg-ivory object-contain px-2 py-1"
        >
        <p class="text-sm font-medium text-white/86">{{ $millionasia.getFooterNotice() }}</p>
      </div>

      <nav class="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="頁尾 Navigation">
        <NuxtLink
          v-for="item in $millionasia.navigation"
          :key="item.to"
          :to="item.to"
          class="text-white/78 transition hover:text-brass"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <a
        :href="$millionasia.brandLink"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-brass"
      >
        <Icon name="lucide:zap" class="h-4 w-4 text-brass" />
        Power by {{ $millionasia.powerBrand }}
      </a>
    </div>
  </footer>
</template>

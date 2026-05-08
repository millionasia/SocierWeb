<script setup>
const route = useRoute()
const { $millionasia } = useNuxtApp()

const navigation = $millionasia.navigation
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-rosewood/10 bg-ivory/95 shadow-sm backdrop-blur-xl">
    <div class="section-shell flex min-h-16 items-center justify-between gap-5 py-2">
      <NuxtLink to="/" class="flex shrink-0 items-center" aria-label="返回首頁">
        <img
          src="/sanchuang-logo.png"
          alt="社團法人臺北市三創協會 LOGO"
          class="h-14 w-auto max-w-[230px] object-contain sm:h-16 sm:max-w-[300px]"
        >
      </NuxtLink>

      <nav class="hidden items-center gap-1 lg:flex" aria-label="主要選單">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="rounded px-3 py-2 text-sm font-semibold transition hover:bg-teal/10 hover:text-teal"
          :class="route.path === item.to ? 'bg-teal text-white hover:bg-teal hover:text-white' : 'text-ink/75'"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <details class="group relative lg:hidden">
        <summary
          class="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded bg-rosewood text-white transition hover:bg-teal"
          aria-label="開啟選單"
        >
          <Icon name="lucide:menu" class="h-5 w-5 group-open:hidden" />
          <Icon name="lucide:x" class="hidden h-5 w-5 group-open:block" />
        </summary>
        <nav
          class="absolute right-0 mt-3 w-56 overflow-hidden rounded border border-rosewood/10 bg-ivory py-2 shadow-soft"
          aria-label="手機選單"
        >
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="flex items-center justify-between px-4 py-3 text-sm font-semibold transition hover:bg-mist"
            :class="route.path === item.to ? 'text-teal' : 'text-ink/75'"
          >
            {{ item.label }}
            <Icon name="lucide:chevron-right" class="h-4 w-4" />
          </NuxtLink>
        </nav>
      </details>
    </div>
  </header>
</template>

<script setup>
const route = useRoute()
const { $millionasia } = useNuxtApp()

const item = computed(() => $millionasia.findEvent(route.params.id))
const adjacent = computed(() => $millionasia.getAdjacent($millionasia.events, route.params.id))
const registrationStatus = computed(() => (item.value ? $millionasia.getEventRegistrationStatus(item.value) : null))
const canRegisterOnline = computed(() => registrationStatus.value?.acceptsRegistration ?? false)
const statusBadgeClass = computed(() => {
  const status = registrationStatus.value
  if (!status) return 'bg-ink text-white'
  if (status.isOpen) return 'bg-teal text-white'
  if (status.isFull) return 'bg-rosewood text-white'
  if (status.isClosed) return 'bg-ink text-white'
  return 'bg-ivory text-ink ring-1 ring-rosewood/15'
})
const seatOptions = computed(() => {
  const maxSeats = Math.min(registrationStatus.value?.remaining ?? 0, 4)
  return Array.from({ length: maxSeats }, (_, index) => index + 1)
})

const defaultRegistration = () => ({
  name: '',
  phone: '',
  email: '',
  organization: '',
  seats: 1,
  note: '',
  consent: false
})

const registration = reactive(defaultRegistration())
const registrationSubmitted = ref(false)
const confirmationCode = ref('')

const resetRegistration = () => {
  Object.assign(registration, defaultRegistration())
  registrationSubmitted.value = false
  confirmationCode.value = ''
}

watch(
  () => route.params.id,
  () => {
    resetRegistration()
  }
)

const saveMockRegistration = (payload) => {
  if (!import.meta.client) return

  const storageKey = 'socier-event-registrations'
  const existing = JSON.parse(window.localStorage.getItem(storageKey) || '[]')
  window.localStorage.setItem(storageKey, JSON.stringify([payload, ...existing].slice(0, 20)))
}

const submitRegistration = () => {
  if (!item.value || !canRegisterOnline.value) return

  confirmationCode.value = `TSA-${item.value.id}-${Date.now().toString().slice(-5)}`
  registrationSubmitted.value = true
  saveMockRegistration({
    eventId: item.value.id,
    eventTitle: item.value.title,
    confirmationCode: confirmationCode.value,
    submittedAt: new Date().toISOString(),
    attendee: {
      name: registration.name,
      phone: registration.phone,
      email: registration.email,
      organization: registration.organization,
      seats: registration.seats,
      note: registration.note
    }
  })
}

useHead(() => ({
  title: item.value ? `${item.value.title} - 活動報名` : '活動公告'
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
            <span
              class="absolute bottom-5 right-5 rounded px-4 py-2 text-sm font-black shadow"
              :class="statusBadgeClass"
            >
              {{ registrationStatus.label }}
            </span>
          </div>

          <div class="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_22rem]">
            <div>
              <p class="eyebrow">Event Detail</p>
              <h1 class="mt-3 flex flex-wrap items-center gap-3 text-3xl font-black leading-tight sm:text-4xl">
                <span>{{ item.title }}</span>
                <span
                  v-if="registrationStatus.isOnline"
                  class="inline-flex items-center gap-1.5 rounded bg-teal/10 px-3 py-1.5 text-sm font-black leading-none text-teal ring-1 ring-teal/20"
                >
                  <Icon name="lucide:mouse-pointer-click" class="h-4 w-4" />
                  線上報名
                </span>
              </h1>
              <p class="mt-5 text-lg leading-9 text-ink/72">{{ item.summary }}</p>

              <div class="mt-7 grid gap-3 sm:grid-cols-3">
                <div class="rounded bg-mist p-4 ring-1 ring-rosewood/10">
                  <p class="text-xs font-bold text-ink/52">活動日期</p>
                  <p class="mt-2 font-black text-rosewood">{{ item.date }}</p>
                </div>
                <div class="rounded bg-mist p-4 ring-1 ring-rosewood/10">
                  <p class="text-xs font-bold text-ink/52">活動時間</p>
                  <p class="mt-2 font-black text-rosewood">{{ item.time }}</p>
                </div>
                <div class="rounded bg-mist p-4 ring-1 ring-rosewood/10">
                  <p class="text-xs font-bold text-ink/52">
                    {{ registrationStatus.isOnline && !registrationStatus.isClosed ? '剩餘名額' : '報名狀態' }}
                  </p>
                  <p class="mt-2 font-black text-rosewood">
                    <template v-if="registrationStatus.isOnline && !registrationStatus.isClosed">
                      {{ registrationStatus.remaining }} / {{ item.capacity }}
                    </template>
                    <template v-else>
                      {{ registrationStatus.label }}
                    </template>
                  </p>
                </div>
              </div>

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

            <div class="space-y-5">
              <aside class="rounded bg-rosewood p-5 text-white shadow-soft">
                <p class="text-xs font-bold uppercase tracking-[0.2em] text-brass">Event Info</p>
                <dl class="mt-5 space-y-5 text-sm">
                  <div>
                    <dt class="font-bold text-white/58">活動地點</dt>
                    <dd class="mt-1 font-bold">{{ item.location }}</dd>
                  </div>
                  <div v-if="registrationStatus.isOnline">
                    <dt class="font-bold text-white/58">報名截止</dt>
                    <dd class="mt-1 font-bold">{{ item.registrationDeadline }}</dd>
                  </div>
                  <div>
                    <dt class="font-bold text-white/58">參加對象</dt>
                    <dd class="mt-2 flex flex-wrap gap-2">
                      <span v-for="audience in item.audience" :key="audience" class="rounded bg-white/10 px-3 py-1 font-bold">
                        {{ audience }}
                      </span>
                    </dd>
                  </div>
                </dl>
              </aside>

              <section v-if="canRegisterOnline" class="rounded bg-white p-5 shadow-soft ring-1 ring-rosewood/10">
                <div class="flex items-center justify-between gap-4">
                  <div>
                    <p class="text-xs font-bold uppercase tracking-[0.16em] text-brass">Registration</p>
                    <h2 class="mt-2 text-2xl font-black">活動報名</h2>
                  </div>
                  <Icon name="lucide:clipboard-pen-line" class="h-8 w-8 text-teal" />
                </div>

                <p class="mt-4 text-sm leading-7 text-ink/62">{{ item.registrationNote }}</p>

                <div v-if="registrationSubmitted" class="mt-5 rounded bg-mist p-5 ring-1 ring-teal/20">
                  <div class="flex items-start gap-3">
                    <Icon name="lucide:circle-check" class="mt-1 h-6 w-6 shrink-0 text-teal" />
                    <div>
                      <h3 class="font-black text-teal">已完成報名送出</h3>
                      <p class="mt-2 text-sm leading-7 text-ink/68">
                        報名編號 {{ confirmationCode }}。此為快速原型的本機模擬資料，正式上線時可串接後端或表單服務。
                      </p>
                    </div>
                  </div>

                  <dl class="mt-4 space-y-2 text-sm">
                    <div class="flex justify-between gap-4">
                      <dt class="text-ink/52">姓名</dt>
                      <dd class="font-bold">{{ registration.name }}</dd>
                    </div>
                    <div class="flex justify-between gap-4">
                      <dt class="text-ink/52">報名人數</dt>
                      <dd class="font-bold">{{ registration.seats }} 位</dd>
                    </div>
                  </dl>

                  <button
                    type="button"
                    class="mt-5 inline-flex items-center gap-2 rounded bg-rosewood px-4 py-2 text-sm font-black text-white transition hover:bg-teal"
                    @click="resetRegistration"
                  >
                    <Icon name="lucide:plus" class="h-4 w-4" />
                    新增另一筆
                  </button>
                </div>

                <form v-else class="mt-5 space-y-4" @submit.prevent="submitRegistration">
                  <label class="block">
                    <span class="text-sm font-bold text-ink/68">姓名</span>
                    <input
                      v-model.trim="registration.name"
                      type="text"
                      required
                      class="mt-2 w-full rounded border border-rosewood/15 bg-mist px-4 py-3 text-sm font-bold outline-none transition focus:border-teal focus:bg-white"
                      placeholder="請輸入姓名"
                    >
                  </label>

                  <label class="block">
                    <span class="text-sm font-bold text-ink/68">手機</span>
                    <input
                      v-model.trim="registration.phone"
                      type="tel"
                      required
                      class="mt-2 w-full rounded border border-rosewood/15 bg-mist px-4 py-3 text-sm font-bold outline-none transition focus:border-teal focus:bg-white"
                      placeholder="請輸入聯絡電話"
                    >
                  </label>

                  <label class="block">
                    <span class="text-sm font-bold text-ink/68">Email</span>
                    <input
                      v-model.trim="registration.email"
                      type="email"
                      required
                      class="mt-2 w-full rounded border border-rosewood/15 bg-mist px-4 py-3 text-sm font-bold outline-none transition focus:border-teal focus:bg-white"
                      placeholder="name@example.com"
                    >
                  </label>

                  <label class="block">
                    <span class="text-sm font-bold text-ink/68">單位 / 公司</span>
                    <input
                      v-model.trim="registration.organization"
                      type="text"
                      class="mt-2 w-full rounded border border-rosewood/15 bg-mist px-4 py-3 text-sm font-bold outline-none transition focus:border-teal focus:bg-white"
                      placeholder="可留空"
                    >
                  </label>

                  <label class="block">
                    <span class="text-sm font-bold text-ink/68">報名人數</span>
                    <select
                      v-model.number="registration.seats"
                      required
                      class="mt-2 w-full rounded border border-rosewood/15 bg-mist px-4 py-3 text-sm font-bold outline-none transition focus:border-teal focus:bg-white"
                    >
                      <option v-for="seat in seatOptions" :key="seat" :value="seat">{{ seat }} 位</option>
                    </select>
                  </label>

                  <label class="block">
                    <span class="text-sm font-bold text-ink/68">備註</span>
                    <textarea
                      v-model.trim="registration.note"
                      rows="3"
                      class="mt-2 w-full rounded border border-rosewood/15 bg-mist px-4 py-3 text-sm font-bold outline-none transition focus:border-teal focus:bg-white"
                      placeholder="飲食需求或其他聯繫事項"
                    />
                  </label>

                  <label class="flex items-start gap-3 rounded bg-mist p-3 text-sm leading-6 text-ink/68">
                    <input v-model="registration.consent" type="checkbox" required class="mt-1 h-4 w-4 accent-teal">
                    <span>我同意協會使用此資料聯繫活動報名、報到與行前通知。</span>
                  </label>

                  <button
                    type="submit"
                    class="inline-flex w-full items-center justify-center gap-2 rounded bg-teal px-5 py-3 text-sm font-black text-white transition hover:bg-rosewood"
                  >
                    <Icon name="lucide:send" class="h-4 w-4" />
                    送出報名
                  </button>
                </form>
              </section>
            </div>
          </div>
        </article>

        <nav class="mt-6 grid gap-3 sm:grid-cols-2" aria-label="活動公告前後篇">
          <NuxtLink
            v-if="adjacent.previous"
            :to="`/events/${adjacent.previous.id}`"
            class="rounded bg-white p-4 shadow-sm ring-1 ring-rosewood/10 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span class="flex items-center gap-2 text-sm font-bold text-brass">
              <Icon name="lucide:arrow-left" class="h-4 w-4" />
              上一則活動
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
              下一則活動
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

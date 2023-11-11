<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  imgs: { type: Array, required: true },
  width: { type: Number, default: ref(screen.width) },
  config: { type: Object, default: () => ({ radius: 0 }) }
})

const current = ref(0)
const wrapperRef = ref(null)
const position = reactive({
  sx: 0,
  ex: 0
})

const start = e => position.sx = e.touches[0].screenX
const move = e => e.preventDefault()
const end = e => {
  position.ex = e.changedTouches[0].screenX
  const minus = position.ex - position.sx
  // 是否滑动过1/3
  const isHalf = Math.abs(minus) * 10 > props.width
  if (minus > 0) { // 左滑
    if (isHalf && current.value > 0) current.value -= 1
  } else { // 右滑
    if (isHalf && current.value < props.imgs.length - 1) current.value += 1
  }
  wrapperRef.value.scrollTo({ top: 0, left: current.value * props.width, behavior: 'smooth' })
}
</script>

<template>
  <div ref="wrapperRef" class="h-[250px] overflow-scroll relative"
    :style="{width: `${width}px`, borderRadius: `${config.radius}px`}" @touchstart="start" @touchmove="move" @touchend="end">
    <div class="w-[500%] h-full relative">
      <div v-for="img, i in imgs" :key="i"
        class="absolute h-full top-0 overflow-hidden"
        :style="{left: `${20 * i}%`, width: `${width}px`}">
        <img class="w-full h-full select-none" :src="img" />
      </div>
    </div>
  </div>
  <ul class="w-full h-10 -translate-y-10 flex justify-center items-center">
    <li v-for="_,i in imgs.length" :key="i" class="inline-block list-none mx-1 w-2 h-1 rounded-sm"
      :class="current === i ? 'w-6 bg-green-600' : 'bg-gray-600'">
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.sb-main-padded {
  padding: 0 !important;
}
::-webkit-scrollbar {
  display: none;
}
</style>
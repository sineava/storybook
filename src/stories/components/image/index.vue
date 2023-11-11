<script setup>
import { ref, computed, reactive } from 'vue'
import Bear from '../../assets/bear.jpg'

const initial = ref(1)
const position = reactive({ x: 0, y: 0 })
const scale = computed(() => `scale(${initial.value})`)
const origin = computed(() => `${position.x}px ${position.y}px`)

const wheel = e => {
  position.x = e.clientX
  position.y = e.clientY
  if (e.wheelDelta<0) {
    initial.value = initial.value > 0.2 ? initial.value - 0.1 : initial.value
  } else if (e.wheelDelta>0) {
    initial.value = initial.value < 2 ? initial.value + 0.1 : initial.value
  }
}
</script>

<template>
  <div class="shadow w-[400px] max-w-full overflow-hidden" @wheel="wheel">
    <img class="t-scale w-full cursor-zoom-out select-none" :src="Bear" />
  </div>
</template>

<style lang="scss" scoped>
.t-scale {
  transform: v-bind(scale);
  transform-origin: v-bind(origin);
}
</style>
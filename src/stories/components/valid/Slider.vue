<script setup>
import { computed, ref, onMounted, nextTick } from 'vue'

const props = defineProps({
  width: { type: Number, required: true },
  color: { type: String, default: '#e8e8e8', required: false },
  successColor: { type: String, default: '#22c55e', required: false },
  fn: { type: Function, required: true }
})

const pixel = ref(0)
const valid = ref(false)
const draggable = ref(false)
// 滑块吸附区域
const range = computed(() => [props.width - 46, props.width - 42])
const offset = computed(() => ({
  left: `${pixel.value}px`,
  bg: `linear-gradient(to right, ${props.successColor}, ${props.successColor} ${pixel.value}px, ${props.color} ${pixel.value}px, ${props.color} 100%)`
}))

const mousedown = () => {
  if (valid.value) return
  draggable.value = true
}
const move = (e) => {
  if (draggable.value && e && !valid.value) {
    const n = e.clientX - 42
    if (n >= 0) pixel.value = n >= range.value[0] ? range.value[1] : n
    if (n >= range.value[0]) {
      valid.value = true
      props.fn()
    }
  }
}
const fn = function() {
  draggable.value = false
  if (!valid.value) pixel.value = 0
}

onMounted(() => {
  nextTick(() => (document.addEventListener('mouseup', fn)))
})

defineExpose({
  valid
})
</script>

<template>
  <div class="h-[32px] max-w-full relative ovflow-hidden"
    :style="{width: `${width}px`}"
    @mousemove="move">
    <button class="t-btn w-full h-full rounded-none text-xs cursor-pointer"
      :class="valid ? 'text-white' : 'text-[#4d4d4d]'">
      {{ valid ? '验证通过' : '请按住滑块,拖动到最右边' }}
    </button>
    <div class="t-slide w-[42px] h-full absolute top-0 cursor-move border border-gray-300 flex justify-center items-center select-none z-10"
      :class="[valid && 'valid']"
      @mousedown="mousedown"
      draggable></div>
  </div>
</template>

<style lang="scss" scoped>
.t-btn {
  background: v-bind('offset.bg');
}
.t-slide {
  box-sizing: border-box;
  left: v-bind('offset.left');
  background: #fff url('../../assets/double_arrow_right.png') center center/20px no-repeat;
  &.valid {
    @apply bg-none;
    &::after {
      content: '✓';
      transform: translateX(10px) translateY(6px);
      background-color: v-bind(successColor);
      @apply absolute top-0 left-0 w-[20px] h-[20px] rounded-full flex justify-center items-center text-[#fff];
    }
  }
}
</style>
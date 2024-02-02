import Button from './components/valid/Slider.vue'

export default {
  title: '验证',
  component: Button
}

export const 滑块验证 = {
  args: {
    width: 400,
    fn: () => console.log('验证通过')
  }
}

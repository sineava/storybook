import Button from './components/valid/Slider.vue'

export default {
  title: 'valid',
  component: Button
}

export const slider = {
  args: {
    width: 400,
    fn: () => console.log('验证通过')
  }
}

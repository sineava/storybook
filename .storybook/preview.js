/** @type { import('@storybook/vue3').Preview } */
import 'tailwindcss/tailwind.css'
import './cancel.css'
import { setup } from '@storybook/vue3'

import { create, NTable, NButton, NCard } from 'naive-ui'

const naive = create({
  components: [NTable, NButton, NCard]
})
setup((app) => (app.use(naive)))

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

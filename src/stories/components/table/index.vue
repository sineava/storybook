<script setup>
import { ref } from 'vue'
import { exportTable, readExcel } from './tool'
import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'

const fileRef = ref(null)
const show = ref(false)
const props = defineProps({
  head: { type: Object, required: true },
  data: { type: Object, required: true },
  name: { type: String, default: '表格.xlsx' },
  config: {
    type: Object,
    default: () => ({ enable: false, enableCenter: false, enableWidth: false, enableHeaderBackground: false })
  }
})
const generateTable = () => {
  exportTable(
    [props.head, ...props.data],
    props.name,
    props.config
  )
}
const trigger = () => {
  fileRef.value.click()
}
const parseTable = (e,) => {
  readExcel(e.target.files[0], (arr) => {
    show.value = true
    alert(JSON.stringify(arr))
  })
}
const guide = () => {
  const driverObj = driver({
    showProgress: true,
    steps: [
      { element: '.guide-1', popover: { description: '下载表格文件' } },
      { element: '.guide-2', popover: { description: '解析本地表格并控制台输出' } },
      { element: '.guide-3', popover: { description: '表格数据' } }
    ],
    prevBtnText: '上一步',
    nextBtnText: '下一步',
    doneBtnText: '完成'
  })
  driverObj.drive()
}
</script>

<template>
  <section class="mb-4">
    <n-button class="guide-1 mr-2" type="info" @click="generateTable">
      下载表格
    </n-button>
    <n-button class="guide-2 mr-2" type="info" @click="trigger">
      解析表格
    </n-button>
    <n-button class="guide-2" @click="guide">
      启用引导
    </n-button>
    <input ref="fileRef" type="file" hidden @change="parseTable" />
  </section>
  <n-table class="guide-3" :bordered="false" :single-line="false">
    <thead>
      <tr><th v-for="item in Object.values(head)">{{ item }}</th></tr>
    </thead>
    <tbody>
      <tr v-for="m in data">
        <td v-for="n in Object.values(m)">{{ n }}</td>
      </tr>
    </tbody>
  </n-table>
</template>
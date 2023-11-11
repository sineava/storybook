import Table from './components/table/index.vue'

export default {
  title: 'table',
  component: Table
}

export const generate = {
  args: {
    head: { name: '姓名', age: '年龄', address: '住址' },
    data: [
      { name: '张三', age: 20, address: '重庆' },
      { name: '李四', age: 22, address: '北京' },
      { name: '王五', age: 27, address: '成都' }
    ],
    name: '自定义表格.xlsx',
    config: {
      enable: true,
      enableCenter: true,
      enableWidth: true,
      enableHeaderBackground: true
    }
  }
}

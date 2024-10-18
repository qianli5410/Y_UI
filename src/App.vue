<template>
  <section style="display: flex; flex-direction: column; gap: 10px; padding: 10px">
    <section style="display: flex;gap: 10px;">
      <YButton type="primary">primary</YButton>
      <YButton type="success">success</YButton>
      <YButton type="warning">warning</YButton>
      <YButton type="danger">danger</YButton>
      <YButton type="info">info</YButton>
    </section>
    <section style="display: flex;gap: 10px;">
      <YInput />
      <YInput width="400px" />
      <YInput placeholder="妈的" />
    </section>
    <section style="display: flex;gap: 10px;">
      <YTable :columns="columns" :data="data">
        <template #age="{ row }">
          <YButton type="info">{{ row.age }}</YButton>
        </template>
      </YTable>
    </section>
    <section style="display: flex;gap: 10px;">
      <YButton type="primary" @click="openDialog">openDialog</YButton>
      <YButton type="primary" @click="onTips">yTips</YButton>
      <YDialog v-model:visible="visible" @submit="visible = false">
        <section style="padding: 10px;">
          <YTable :columns="columns" :data="data" />
        </section>
      </YDialog>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import yTips from './utils/tips.ts'
const columns = ref([
  {
    label: '姓名',
    prop: 'name',
  },
  {
    label: '年龄',
    prop: 'age',
    slot: 'age'
  },
  {
    label: '性别',
    prop: 'sex',
    render: (row: any, column: any) => {
      return row.sex == '男' ? '♂' : '♀'
    }
  }
])
const data = ref([
  {
    name: '张三',
    age: 18,
    sex: '男'
  },
  {
    name: '李四',
    age: 20,
    sex: '女'
  },
  {
    name: '王五',
    age: 18,
    sex: '男'
  },
  {
    name: '赵六',
    age: 20,
    sex: '女'
  }
])

const visible = ref(false)
const openDialog = () => {
  visible.value = true
}
const onTips = () => {
  yTips({ message: '操作成功！' })
}
</script>